var express = require('express');
var swig = require('swig');
var server = express();

/*swig Configuration*/
server.engine('html',swig.renderFile);
server.set('view engine','html');
server.set('views',__dirname+'/app/views');

/*Controllers*/
require('./app/controllers/Home')(server);
server.listen(800);
