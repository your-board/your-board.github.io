// app/routes.js

// dependencies
var express = require('express');
var app = express();

// grab the Your model
var Board = require('./models/board');

// access paths
var path = require('path');


module.exports = function(app) {
    var router = express.Router();
    // server routes ======================================
    // handle api calls (crud), authentication routes, etc
    
    /*
    router.get('/api/boards', function(req, res) {
        // use mongoose to get all user's your objects
        Board.find(function(err, boards) {
            // send an error
            if (err)
                res.send(err);
            // otherwise, return all boards
            res.json(boards);
        });
    });
    */
    router.get('/boards', function(req, res) {
        //res.json({"from":"app/routes"});
        res.sendFile('boards.html', {root: path.join(__dirname, '../public/views/')});
    });

    // create a new board
    router.post('/boards', function(req, res) {
        // create new Board instance
        var board = new Board();
        board.content.name = "Another Score Board";
        board.content.context = "Work";
        board.data.values.push("A data string");
        // save board object
        board.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Board created!' });
            });
    });
    
    // frontend routes ======================================
    // handle all angular requests
    router.get('*', function(req, res) {
        res.sendFile('index.html', {root: path.join(__dirname, '../public/views/')});
    });
app.use('/', router);
// return Router
module.exports = router;
};

