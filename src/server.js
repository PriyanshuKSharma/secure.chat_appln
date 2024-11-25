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

const app = express();
const port = 8082;
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));

// Simulated user database
const users = {
  'user1': 'password1',
  'user2': 'password2',
  'user3': 'password3'
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

// Endpoint to handle file encryption
app.post('/api/encrypt-file', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded.');
  
  const fileBuffer = req.file.buffer.toString('utf-8');
  const encryptedFile = encrypt(fileBuffer);  // Encrypt the file content

  // Send the encrypted file as a response
  const buffer = Buffer.from(encryptedFile, 'utf-8');
  res.setHeader('Content-Type', 'application/octet-stream');
  res.setHeader('Content-Disposition', 'attachment; filename="encrypted-file.enc"');
  res.send(buffer);
});

// Endpoint to handle file decryption
app.post('/api/decrypt-file', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded.');

  const encryptedContent = req.file.buffer.toString('utf-8');
  const decryptedFile = decrypt(encryptedContent);  // Decrypt the file content

  res.setHeader('Content-Type', 'application/octet-stream');
  res.setHeader('Content-Disposition', 'attachment; filename="decrypted-file.txt"');
  res.send(decryptedFile);
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
      ws.send(encrypt('Response: ' + decryptedMessage));
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });
});
