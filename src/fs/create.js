import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import { writeFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const fileName = 'fresh.txt';
  const fileText = 'I am fresh and young';
  const errorMsg = 'FS operation failed';
  const filePath = resolve(__dirname, 'files', fileName);

  if (existsSync(filePath)) throw new Error(errorMsg);
  await writeFile(filePath, fileText);
};

await create();
