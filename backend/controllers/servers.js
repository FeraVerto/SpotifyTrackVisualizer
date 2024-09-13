import { runWorker } from '../utils/runWorker.js';

export const getAll = async (req, res) => {
  const data = req.parsedCSV;

  let middleIndex = Math.floor(data.length / 2);
  const leftArray = data.slice(0, middleIndex);
  const rightArray = data.slice(middleIndex);

  const result = [];

  try {
    let [dataLeft, dataRight] = await Promise.all([
      runWorker(leftArray),
      runWorker(rightArray),
    ]);

    result.push(dataLeft.resultData[0]);
    result.push(dataRight.resultData[0]);
  } catch (error) {
    console.log('error', error);
  }

  res.json(result.flat());

  // res.status(200).json(servers);
};
