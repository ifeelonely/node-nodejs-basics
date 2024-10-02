import { unlink } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const fileToDelete = 'fileToRemove.txt';
  const filePath = resolve(__dirname, 'files', fileToDelete);
  const errorMsg = 'FS operation failed';

  try {
    await unlink(filePath);
  } catch (error) {
    throw new Error(errorMsg);
  }
};

await remove();
