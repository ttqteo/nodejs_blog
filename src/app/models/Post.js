const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const BlogPostSchema = new Schema(
  {
    _id: {type: Number, },
    name: { type: String, default: 'No title'},
    description: { type: String, default: 'No description'},
    image: { type: String, default: 'No image'},
    slug: { type: String, slug: 'name', unique: true },
  },{
    _id: false,
    timestamps: true,
  }
);

// Add plugin
mongoose.plugin(slug);
BlogPostSchema.plugin(AutoIncrement)
BlogPostSchema.plugin(mongooseDelete, { 
  overrideMethods: 'all',
  deletedAt : true  
});

module.exports = mongoose.model('Post', BlogPostSchema)