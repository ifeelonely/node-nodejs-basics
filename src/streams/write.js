import path from 'node:path';
import url from 'node:url';
import fs from 'node:fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const fileToWrite = 'fileToWrite.txt';
  const filePath = path.join(__dirname, 'files', fileToWrite);
  const writeStream = fs.createWriteStream(filePath);

  process.stdin.pipe(writeStream);
};

await write();
