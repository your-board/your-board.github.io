// app/models/your.js
// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BoardSchema = new Schema({ 
    content: {
    name: String,
    title: String,
    context: String 
    },
    data: {
        values: []
    }
});

var SignupSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
});


module.exports = mongoose.model('Board', BoardSchema);
/*
// define the board  model
// allows us to pass this to other files when it is called
module.exports = mongoose.model('Board', {
    name: { type: String, 
        default: '' 
    }
});
*/
