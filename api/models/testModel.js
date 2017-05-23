'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ChantSchema = new Schema({
  
  chant: {type: String, Required: 'Text of the Chant'},
  
  Created_date: {type: Date, default: Date.now},
  
  upvotes: {type: Number, default: 0},
  
  creator: {type: Number, Required: 'User ID of chant creator'},
  
  owner: {type: Number, Required: 'User ID of chant owner'},

  score: {type: Number, Required: 'Upvotes - Downvotes', default: 0}
});

var UserScheme = new Schema({

  name: { type: String, Required: 'Username'},
  email: {type: String, Required: 'Email'}

});

module.exports = mongoose.model('Chants', ChantSchema);
module.exports = mongoose.model('Users', UserScheme)