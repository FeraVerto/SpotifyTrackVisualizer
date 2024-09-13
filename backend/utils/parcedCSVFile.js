import fs from 'fs';
import path from 'node:path';
import csv from 'csv-parser';
import { fileURLToPath } from 'url';

export const parcedCSVFile = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(
    __dirname,
    '../files/MostStreamedSpotifySongs2024.csv'
  );

  let results = [];
  return new Promise((res, rej) => {
    const csvData = fs.createReadStream(filePath, 'utf-8');
    csvData
      .pipe(csv(','))
      .on('data', (data) => results.push(data))
      .on('end', () => {
        res(results);
      });
    return results;
  });
};
