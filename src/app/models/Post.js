const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const BlogPost = new Schema({
    name: { type: String, default: 'No title'},
    description: { type: String, default: 'No description'},
    image: { type: String, default: 'No image'},
    slug: { type: String, slug: 'name', unique: true },
  }, {
    timestamps: true,
  });

  module.exports = mongoose.model('Post', BlogPost)