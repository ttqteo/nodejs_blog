const Post = require('../models/Post');
const { mongooseToObject } = require('../../ulti/mongoose')

class PostController {

    // [GET] /posts/:slug
    show(req, res, next) {
        Post.findOne({ slug: req.params.slug})
            .then(post => {
                res.render('posts/show', { post: mongooseToObject(post) })
            })
            .catch(next)
    }

    // [GET] /posts/create
    create(req, res, next) {
        res.render('posts/create');
    }

    // [POST] /posts/store
    store(req, res, next) {
        const post = new Post(req.body);
        post.save()
            .then(() => res.redirect(`/`))
            .catch(error => {
                
            });
    }

    

}

module.exports = new PostController;
