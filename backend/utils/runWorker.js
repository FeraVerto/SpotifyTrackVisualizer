import { Worker } from 'worker_threads';
import path from 'node:path';
import { fileURLToPath } from 'url';

export const runWorker = (data) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, './worker.js');

  return new Promise((res, rej) => {
    const worker = new Worker(filePath, { workerData: data });

    worker.on('message', (data) => {
      res(data);
    });

    worker.on('error', (err) => {
      rej(err);
    });

    worker.on('exit', (code) => {
      if (code !== 0) {
        rej(new Error(`Worker завершился с кодом выхода ${code}`));
      }
    });
  });
};
