import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const fileToReadPath = join(__dirname, 'files', 'fileToRead.txt');
  const errorMsg = 'FS operation failed';
  const readParams = { encoding: 'utf8' };

  try {
    const content = await readFile(fileToReadPath, readParams);
    console.log(content);
  } catch (error) {
    throw new Error(errorMsg);
  }
};

await read();
