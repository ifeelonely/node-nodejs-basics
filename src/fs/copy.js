import { cp } from 'fs/promises';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const src = join(__dirname, 'files');
  const dest = join(__dirname, 'files_copy');
  const errorMsg = 'FS operation failed';
  const copyParams = { errorOnExist: true, recursive: true, force: false };

  try {
    await cp(src, dest, copyParams);
  } catch (error) {
    throw new Error(errorMsg);
  }
};

await copy();
