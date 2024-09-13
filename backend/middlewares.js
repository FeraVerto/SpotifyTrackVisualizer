import { parcedCSVFile } from './utils/parcedCSVFile.js';

export const csvParserMiddleware = (req, res, next) => {
  parcedCSVFile()
    .then((data) => {
      req.parsedCSV = data;
      next();
    })
    .catch((error) => {
      next(error);
    });
};
