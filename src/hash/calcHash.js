import path from 'node:path';
import fs from 'node:fs';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const fileName = 'fileToCalculateHashFor.txt';
  const filePath = path.join(__dirname, 'files', fileName);
  const readStream = fs.createReadStream(filePath);
  const hash = crypto.createHash('sha256');

  readStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  readStream.on('end', () => {
    const result = hash.digest('hex');
    console.log(result);
  });
};

await calculateHash();
