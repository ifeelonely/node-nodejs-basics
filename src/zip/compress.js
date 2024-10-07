import path from 'node:path';
import url from 'node:url';
import zlib from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const fileToCompress = 'fileToCompress.txt';
  const archiveName = 'archive.gz';
  const srcPath = path.join(__dirname, 'files', fileToCompress);
  const destPath = path.join(__dirname, 'files', archiveName);
  const gzip = zlib.createGzip();
  const source = createReadStream(srcPath);
  const destination = createWriteStream(destPath);

  source.pipe(gzip).pipe(destination);
};

await compress();
