const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPost = new Schema({
    name: { type: String, default: ''},
    description: { type: String, default: ''},
    image: { type: String, default: ''},
  });

  module.exports = mongoose.model('Post', BlogPost)