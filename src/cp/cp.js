import { fork } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const childPath = path.join(__dirname, 'files', 'script.js');
  const child = fork(childPath, args, { silent: true });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

spawnChildProcess([1, 2, 3, 4]);
