const path = require('path');
const Number = require('../models/number');
const parser = require('body-parser');

exports.getNumbers = (req, res) => {
     Number.find({})
     .then( (numbers) => {
       var output = numbers.map( (entry) => {
         return entry.number;
       })
       res.send(output || 'nothing here')
     });
 };

exports.postNumber = (req, res) => {
  var numb = parseInt(req.body.number);
    var newNumb = Number.create({
      number: numb
    })

  .then( (newNumb) => {
    return res.send('Done!');
  })
  .catch((err) => console.error(err));
};

exports.statusForLoadingBar = function(number) {
  
}
