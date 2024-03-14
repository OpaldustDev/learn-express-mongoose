var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
    summary: { type: String, required: true },
    isbn: { type: String, required: true },
    genre: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
  }
);

//Export model
module.exports = mongoose.model('Book', BookSchema);

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: { type: String, required: true, minLength: 3, maxLength: 100 },
  }

);

//Export model
module.exports = mongoose.model('Genre', GenreSchema);
module.exports = mongoose.model('Genre', GenreSchema);

// Author Schema
var AuthorSchema = new Schema(
  {
    name: {type: String, required: true, maxLength: 100},
    birthYear: {type: Number},
    deathYear: {type: Number}  
  }
);

AuthorSchema
.virtual('lifespan')
.get(function () {
  let lifespanString = '';
  if (this.birthYear) {
    lifespanString = this.birthYear.toString();
  }
  lifespanString += ' - ';
  if (this.deathYear) {
    lifespanString += this.deathYear.toString();
  }
  return lifespanString;
});

// Export model
module.exports = mongoose.model('Author', AuthorSchema);