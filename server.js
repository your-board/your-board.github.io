// server.js
//
// modules ====================================================================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration ====================================================================

// server port
var port = 3000;

// config files
var db = require('./config/db');

// connect to mongoDB
// uncomment after credentials have been entered in config/db.js
mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use (bodyParser.json({type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

// override with X-HTTP-Method-Override header in the request.
app.use(methodOverride('X-HTTP-Method-Override'));

// set static files location: /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ====================================================================
require('./app/routes')(app); // configure routes

// start app ====================================================================
app.listen(port);

// say something to the user
console.log('Your (Score) Board is now online... Congrats!');

// expose the app
exports = module.exports = app;
