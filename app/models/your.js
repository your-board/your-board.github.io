// app/models/your.js
// grab the mongoose module
var mongoose = require('mongoose');

// defing our your model
// allows us to pass this to other files when it is called
module.exports = mongoose.model('Board', {
    name: { type: String, 
        default: '' 
    }
});
