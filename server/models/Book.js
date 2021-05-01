const { Schema } = require('mongoose');

// Thi is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
// authors: [
//   {
//     type: String,
//   },
// ],
const bookSchema = new Schema({

  authors: [{
    type: String,
    //required: true,
  }],
  description: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  bookId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = bookSchema;
