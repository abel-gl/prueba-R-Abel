var mongoose = require('../conecctions/mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  id_user : {type : String},
  email : {type : String, required : true},
  first_name : {type : String},
  last_name : {type:String},
  url_foto :{type:String}
});

var User = mongoose.model('User',userSchema);

module.exports = User;
