var express = require('express');
var http = require('http');
var swig = require('swig');
var server = express();

var server_socket = http.createServer(server).listen(9000);
var io = require('socket.io').listen(server_socket);


/*swig Configuration*/
swig.setDefaults({cache:false});
server.engine('html',swig.renderFile);
server.set('view engine','html');
server.set('views',__dirname+'/app/views');

/*Controllers*/
require('./app/controllers/Home')(server,io);
