import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { rename as renameFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const oldFilePath = resolve(__dirname, 'files', 'wrongFilename.txt');
  const newFilePath = resolve(__dirname, 'files', 'properFilename.md');
  const errorMsg = 'FS operation failed';

  try {
    await renameFile(oldFilePath, newFilePath);
  } catch (error) {
    throw new Error(errorMsg);
  }
};

await rename();
