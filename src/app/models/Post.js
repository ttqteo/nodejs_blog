const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const BlogPost = new Schema(
  {
    name: { type: String, default: 'No title'},
    description: { type: String, default: 'No description'},
    image: { type: String, default: 'No image'},
    slug: { type: String, slug: 'name', unique: true },
  },{
    timestamps: true,
  }
);

// Add plugin
mongoose.plugin(slug);
BlogPost.plugin(mongooseDelete, { 
  overrideMethods: 'all',
  deletedAt : true  
});

module.exports = mongoose.model('Post', BlogPost)