const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/blog_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect Successfully!');
    } catch (error) {
        console.log('Connect Failure!')
    }

}

module.exports = { connect };
