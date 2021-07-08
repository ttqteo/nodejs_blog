
class BlogController {
    
    // [GET] /blog
    index(req, res) {
        res.render('blog');
    }

    // [GET] /blog/:slug
    show(req, res) {
        res.send('NEW DETAIL!!')
    }

}

module.exports = new BlogController;
