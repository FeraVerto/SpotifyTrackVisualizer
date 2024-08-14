var express = require('express');
var router = express.Router();
var csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

router.get('/data', function (req, res, next) {
  const results = [];
  const filePath = path.join(
    __dirname,
    '../files/MostStreamedSpotifySongs2024.csv'
  );
  fs.createReadStream(filePath)
    .pipe(csv({ separator: '\t' }))
    .on('data', (data) => {
      results.push(data);
    })
    .on('end', () => {
      res.json(results);
    })
    .on('error', (err) => {
      next(err);
    });
});

module.exports = router;
