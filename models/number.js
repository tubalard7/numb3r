const mongoose = require('mongoose');

var NumberSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Number', NumberSchema);
