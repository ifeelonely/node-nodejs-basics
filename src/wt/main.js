import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';
import path from 'node:path';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const numOfCpus = +cpus().length;
  const workerPath = path.join(__dirname, 'worker.js');
  const promises = [];

  for (let i = 0; i < numOfCpus; i++) {
    promises.push(
      new Promise((resolve) => {
        const worker = new Worker(workerPath, { workerData: i + 10 });

        worker.on('message', (data) => {
          resolve({ status: 'resolved', data: data });
        });

        worker.on('error', (err) => {
          resolve({ status: 'error', data: null });
        });
      })
    );
  }

  Promise.all(promises).then((results) => {
    console.log(results);
  });
};

await performCalculations();
