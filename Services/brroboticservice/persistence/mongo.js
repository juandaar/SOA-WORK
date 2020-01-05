module.exports = function (uri) {
    const mongoose = require('mongoose');

    const options = {
        useNewUrlParser: true,
        poolSize: 5
        // user: 'lavan',
        // pass: 'lavan2@'
    }
    mongoose.connect(uri, options);
    mongoose.Promise = require('bluebird');

    mongoose.connection.on('connected', function () {
        console.log('MongoDB connected')
    });

    mongoose.connection.on('error', function (error) {
        console.log('MongoDB error: ' + error)
    });

    mongoose.connection.on('disconnected', function () {
        console.log('MongoDB disconnected')
    });

    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Server stopped MongoDB disconnected')
            process.exit(0);
        });
    });
};