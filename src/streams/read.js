import url from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filenameToRead = 'fileToRead.txt';
  const filePath = path.join(__dirname, 'files', filenameToRead);
  const readStream = fs.createReadStream(filePath);

  readStream.pipe(process.stdout);
};

await read();
