const router = require('express').Router();
const path = require('path');
const Number = require('./models/number');
const parser = require('body-parser');
const util = require('./lib/utility');

router.get('/', (req, res) => {
  res.send('HOME PAGE');
  });

router.get('/numbers', util.getNumbers);

router.post('/numbers', util.postNumber);

module.exports = router;
