import express from 'express';
import { WebSocketServer } from 'ws';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import path from 'path';
import multer from 'multer';
import dotenv from 'dotenv';



// File upload configuration using multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Fixed encryption key (32 bytes for AES-256)
const encryptionKey = Buffer.from('12345678901234567890123456789012', 'utf8'); 
const algorithm = 'aes-256-cbc';
dotenv.config();

const secretKey = process.env.SECRET_KEY; // Replace with your own secret key

const encrypt = (text) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, encryptionKey, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + ':' + encrypted;
};

const decrypt = (text) => {
  const [ivHex, encryptedHex] = text.split(':');
  const iv = Buffer.from(ivHex, 'hex');
  const encryptedText = Buffer.from(encryptedHex, 'hex');
  const decipher = crypto.createDecipheriv(algorithm, encryptionKey, iv);
  decipher.setAutoPadding(true);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

const encryptBuffer = (buffer) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, encryptionKey, iv);
  let encrypted = cipher.update(buffer);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
};

const decryptBuffer = (encryptedHex) => {
  if (!encryptedHex || typeof encryptedHex !== 'string') {
    throw new Error('Invalid encrypted data');
  }
  
  const parts = encryptedHex.split(':');
  if (parts.length !== 2) {
    throw new Error('Invalid encrypted format');
  }
  
  const [ivHex, encryptedDataHex] = parts;
  if (!ivHex || !encryptedDataHex) {
    throw new Error('Missing encryption components');
  }
  
  const iv = Buffer.from(ivHex, 'hex');
  const encryptedBuffer = Buffer.from(encryptedDataHex, 'hex');
  const decipher = crypto.createDecipheriv(algorithm, encryptionKey, iv);
  let decrypted = decipher.update(encryptedBuffer);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted;
};

const app = express();
const port = 8082;
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));

// Social worker training database
const users = {
  'sw_trainee1': 'forensics2024',
  'sw_trainee2': 'evidence123',
  'sw_supervisor': 'admin2024',
  'forensics_trainer': 'trainer123'
};

// Evidence handling log
const evidenceLog = [];

const logEvidence = (action, filename, user, timestamp = new Date()) => {
  evidenceLog.push({
    id: evidenceLog.length + 1,
    action,
    filename,
    user,
    timestamp: timestamp.toISOString(),
    hash: crypto.createHash('sha256').update(filename + user + timestamp).digest('hex').substring(0, 8)
  });
};

app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

app.post('/api/authenticate', (req, res) => {
  const { username, password } = req.body;
  console.log(`Authentication attempt: username=${username}, password=${password}`);

  if (users[username] && users[username] === password) {
    const token = jwt.sign({ id: username }, secretKey, { expiresIn: 86400 });
    console.log('Authentication successful');
    res.status(200).send({ auth: true, token: token });
  } else {
    console.log('Authentication failed: Invalid credentials');
    res.status(401).send('Invalid credentials');
  }
});

// Evidence encryption endpoint
app.post('/api/encrypt-evidence', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).send('No evidence file uploaded.');
  
  const token = req.headers.authorization?.split(' ')[1];
  let user = 'unknown';
  try {
    const decoded = jwt.verify(token, secretKey);
    user = decoded.id;
  } catch (err) {}
  
  // Create forensic metadata
  const metadata = {
    originalName: req.file.originalname,
    mimeType: req.file.mimetype,
    size: req.file.size,
    encryptedBy: user,
    encryptedAt: new Date().toISOString(),
    evidenceId: 'EVD-' + Date.now(),
    chainOfCustody: [{
      action: 'ENCRYPTED',
      by: user,
      timestamp: new Date().toISOString()
    }]
  };
  
  const metadataStr = JSON.stringify(metadata);
  const metadataLength = Buffer.byteLength(metadataStr, 'utf8');
  const combinedBuffer = Buffer.concat([
    Buffer.from(metadataLength.toString().padStart(10, '0'), 'utf8'),
    Buffer.from(metadataStr, 'utf8'),
    req.file.buffer
  ]);
  
  const encryptedFile = encryptBuffer(combinedBuffer);
  logEvidence('ENCRYPTED', req.file.originalname, user);

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Disposition', `attachment; filename="${metadata.evidenceId}.enc"`);
  res.send(encryptedFile);
});

// Evidence decryption endpoint
app.post('/api/decrypt-evidence', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).send('No evidence file uploaded.');

  const token = req.headers.authorization?.split(' ')[1];
  let user = 'unknown';
  try {
    const decoded = jwt.verify(token, secretKey);
    user = decoded.id;
  } catch (err) {}

  try {
    const encryptedContent = req.file.buffer.toString('utf8');
    const decryptedBuffer = decryptBuffer(encryptedContent);
    
    // Extract forensic metadata
    const metadataLength = parseInt(decryptedBuffer.slice(0, 10).toString('utf8'));
    const metadataStr = decryptedBuffer.slice(10, 10 + metadataLength).toString('utf8');
    const metadata = JSON.parse(metadataStr);
    const fileContent = decryptedBuffer.slice(10 + metadataLength);
    
    // Update chain of custody
    metadata.chainOfCustody.push({
      action: 'DECRYPTED',
      by: user,
      timestamp: new Date().toISOString()
    });
    
    logEvidence('DECRYPTED', metadata.originalName, user);

    res.setHeader('Content-Type', metadata.mimeType || 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename="${metadata.originalName}"`);
    res.setHeader('X-Evidence-Metadata', JSON.stringify(metadata));
    res.send(fileContent);
  } catch (error) {
    console.error('Decryption error:', error.message);
    res.status(400).send('Failed to decrypt evidence file: ' + error.message);
  }
});

// Evidence log endpoint
app.get('/api/evidence-log', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    jwt.verify(token, secretKey);
    res.json(evidenceLog);
  } catch (err) {
    res.status(401).send('Unauthorized');
  }
});

const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws, req) => {
  const token = new URL(req.url, `http://${req.headers.host}`).searchParams.get('token');
  if (!token) {
    ws.close(1008, 'Token missing');
    return;
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      ws.close(1008, 'Invalid token');
      return;
    }

    ws.on('message', (data) => {
      const decryptedMessage = decrypt(data.toString());
      // Forensics training chat responses
      const responses = [
        'Evidence secured. Remember to document chain of custody.',
        'Digital forensics tip: Always create bit-for-bit copies.',
        'Training note: Maintain evidence integrity at all times.',
        'Best practice: Use write-blocking tools when imaging devices.',
        'Remember: Document everything in your forensic report.'
      ];
      const response = responses[Math.floor(Math.random() * responses.length)];
      ws.send(encrypt(`Forensics Trainer: ${response}`));
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });
});
