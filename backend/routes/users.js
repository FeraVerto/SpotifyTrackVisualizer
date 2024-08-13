var express = require('express');
var router = express.Router();

router.get('/data', function (req, res, next) {
  const data = { message: 'Hello from the backend!' };
  res.send(data);
});

module.exports = router;
