const blogRouter = require('./blog')
const postsRouter = require('./posts')
const siteRouter = require('./site')


function route(app) {

    app.use('/blog', blogRouter);
    app.use('/posts', postsRouter);

    app.use('/', siteRouter);

}

module.exports = route;
