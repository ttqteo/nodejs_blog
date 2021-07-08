const Post = require('../models/Post');

class SiteController {
    
    // [GET] /home
    index(req, res) {
        
        Post.find({}, function(err, posts) {
            if (!err) {
                res.json(posts);
                return;
            }
            res.status(400).json({ error: 'ERROR'})
        })

        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController;
