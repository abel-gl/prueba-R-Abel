//esta es una connection a mongoDB a esta conexion quedo atras
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chatusers');

module.exports = mongoose ;
