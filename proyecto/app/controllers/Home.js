var HomeController = function (server) {
  console.log("");

  server.route('/')
    .get(function (req,res) {
      res.render('Home/index');
    })
}
module.exports = HomeController;
