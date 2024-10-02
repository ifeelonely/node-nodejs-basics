import { readdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const folderPath = join(__dirname, 'files');
  const readParams = { withFileTypes: true, recursive: true };
  const errorMsg = 'FS operation failed';

  try {
    const files = await readdir(folderPath, readParams);
    console.log(files.map((file) => file.name));
  } catch (error) {
    throw new Error(errorMsg);
  }
};

await list();
