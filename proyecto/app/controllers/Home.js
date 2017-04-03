var HomeController = function (server) {
  console.log("");

  server.route('/')
    .get(function (req,res) {
      res.render('home/index');
    })
}
module.exports = HomeController;
