const Post = require('../models/Post');
const { multipleMongooseToObject } = require('../../util/mongoose')

class MeController {

    // [GET] /me/stored/posts
    storedPosts (req, res, next) {

        let postQuery = Post.find({});

        if (req.query.hasOwnProperty('_sort')) {
            postQuery = postQuery.sort({ 
                [req.query.column]: req.query.type
             });
        }

        Promise.all([postQuery, Post.countDocumentsDeleted()])
            .then(([posts, deletedCount]) => {
                res.render('me/stored-posts', {
                    deletedCount,
                    posts: multipleMongooseToObject(posts)
                })
            })

    }

    // [GET] /me/trash/posts
    trashPosts (req, res, next) {
        Post.findDeleted({})
        .then(posts => res.render('me/trash-posts', {
            posts: multipleMongooseToObject(posts),
        }))
        .catch(next);
    }

}

module.exports = new MeController;