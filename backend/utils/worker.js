import { v4 as uuidv4 } from 'uuid';
import { parentPort, workerData } from 'worker_threads';

const cosineSimilarityData = new Map();

let resultData = workerData.reduce((acc, item) => {
  return [...acc, { ...item, trackID: uuidv4() }];
}, []);

// for (let i = 0; i < resultData.length; i++) {
//   for (let j = 0; j < resultData.length; j++) {}
// }

parentPort.postMessage({ resultData });
