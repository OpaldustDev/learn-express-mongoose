var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: String, required: true, max: 100, min: 3},
  }
);


//Export model
module.exports = mongoose.model('Genre', GenreSchema);