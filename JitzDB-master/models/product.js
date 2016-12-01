var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String},
    title: {type: String},
    category: {type: String},
    description: {type: String},
    options: [{size:String, price:Number}]

});

module.exports = mongoose.model('Product', schema);
