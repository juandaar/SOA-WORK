var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var cors = require('cors');
var expressValidator = require('express-validator');

var app = express();

//app.set('trust proxy', true);
app.use(cors());
app.use(express.static('./static'));
app.use(bodyParser.json());
app.use(expressValidator());

var config = {
    //cwd: 'app',
    verbose: true,
};

//FIXME: Remove .then('routes/orderMatch.js')
consign(config)
    .include('models')
    .then('api')
    .then('routes')
    .into(app); 


module.exports = app;