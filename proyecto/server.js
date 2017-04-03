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
<<<<<<< HEAD
require('./app/controllers/Home')(server,io);
=======
require('./app/controllers/Home')(server);
<<<<<<< HEAD
server.listen(9000);
>>>>>>> 9a8ae2c7715881636326b347eb53135652004b81
=======
server.listen(800);
>>>>>>> 55400855688cc819bda751c34c1da5a152bf8645
