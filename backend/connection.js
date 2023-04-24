const mongoose = require('mongoose');

const url = "mongodb+srv://shivampandey:golu9565@cluster0.ndfaeot.mongodb.net/frontcrew?retryWrites=true&w=majority"
mongoose.connect(url)


    .then((result) => {
        console.log('databse connected');

    }).catch((err) => {
        console.error(err);

    });

module.exports = mongoose;