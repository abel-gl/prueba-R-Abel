var User = require('../models/User');

var HomeController = function (server,io) {
  console.log("");
  var io2 = io.of('/chat');
  io2.on('connection',function (socket) {
    socket.join('chat');
    socket.emit('news', { hello: 'world desde mi servidor' });
    socket.on('my other event', function (data) {
      console.log(data.my);
    });
  });

  server.route('/')
    .get(function (req,res) {
      res.render('Home/index');
    })
}
module.exports = HomeController;
