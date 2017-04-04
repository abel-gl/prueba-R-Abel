var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chatusers');

module.exports = mongoose ;
