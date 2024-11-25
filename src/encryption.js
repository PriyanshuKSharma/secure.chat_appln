import crypto from 'crypto';

const encryptionKey = Buffer.from('12345678901234567890123456789012', 'utf8'); // 32 bytes for AES-256
const algorithm = 'aes-256-cbc';

export const encryptFile = (buffer) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, encryptionKey, iv);
  let encrypted = cipher.update(buffer);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
};

export const decryptFile = (encryptedText) => {
  const [ivHex, encryptedHex] = encryptedText.split(':');
  const iv = Buffer.from(ivHex, 'hex');
  const encryptedBuffer = Buffer.from(encryptedHex, 'hex');
  const decipher = crypto.createDecipheriv(algorithm, encryptionKey, iv);
  let decrypted = decipher.update(encryptedBuffer);
  decrypted = Buffer.concat([decrypted, cipher.final()]);
  return decrypted;
};
