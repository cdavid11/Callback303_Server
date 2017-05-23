'use strict';


var mongoose = require('mongoose'),
Chant = mongoose.model('Chants');

exports.list_all_chants = function(req, res) {
  Chant.find({}, function(err, chant) {
    if (err)
      res.send(err);
    res.json(chant);
  });
};




exports.create_a_chant = function(req, res) {
  var new_chant = new Chant(req.body);
  new_chant.save(function(err, chant) {
    if (err)
      res.send(err);
    res.json(chant);
  });
};


exports.read_a_chant = function(req, res) {
  Chant.findById(req.params.chantID, function(err, chant) {
    if (err)
      res.send(err);
    res.json(chant);
  });
};


exports.update_a_chant = function(req, res) {
  Chant.findOneAndUpdate(req.params.chantID, req.body, {new: true}, function(err, chant) {
    if (err)
      res.send(err);
    res.json(chant);
  });
};


exports.delete_a_chant = function(req, res) {


  Chant.remove({
    _id: req.params.chantID
  }, function(err, chant) {
    if (err)
      res.send(err);
    res.json({ message: 'Chant successfully deleted' });
  });
};