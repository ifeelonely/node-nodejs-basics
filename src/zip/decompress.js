import path from 'node:path';
import url from 'node:url';
import zlib from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const src = path.join(__dirname, 'files', 'archive.gz');
  const dest = path.join(__dirname, 'files', 'fileToCompress.txt');
  const decompress = zlib.Unzip();
  const readStream = createReadStream(src);
  const writeStream = createWriteStream(dest);

  await pipeline(readStream, decompress, writeStream);
};

await decompress();
