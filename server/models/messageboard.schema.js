var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create the schema
var messageboardSchema = new Schema({
  name: {type: String},
  message: {type: String}
});

//exports

module.exports = mongoose.model('Users', messageboardSchema);
