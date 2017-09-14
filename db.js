const mongoose = require('mongoose');

mongoose.connect('mongodb://anr:wakalaka@ds135594.mlab.com:35594/thursday');
const db = mongoose.connection

db.on('error', (err) => console.error('Mongo connection failed: ', err));
db.once('open', () => console.log('Mongo connection successful!'))

module.exports = db;
