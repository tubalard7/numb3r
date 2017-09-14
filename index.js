const express = require('express');
const parser = require('body-parser');
const router = require('./routes');
const db = require('./db');
const path = require('path');

const app = express();
app.use(parser.json());

app.use('/scripts', express.static(path.resolve(__dirname, './node_modules')))
app.use(express.static(path.resolve(__dirname, './public')));
app.use('/api', router);

app.listen(3000);
console.log('App be running on :3000');
