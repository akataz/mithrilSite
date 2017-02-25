//packages
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');


//var config = require('./config'); // get the config file

// =======================
// configuration =========
// =======================
var port = 3000;
app.use(express.static('client'))

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// =======================
// routes ================
// =======================
// basic route
app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

// var blog = express.Router();
// blog.use(function(req, res, next){
//
// })

//start server
app.listen(port);
console.log('Now listening on http://localhost:' + port);
