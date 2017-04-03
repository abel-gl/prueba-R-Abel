var HomeController = function (server,io) {
  console.log("");

  io.on('connection',function (socket) {
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
