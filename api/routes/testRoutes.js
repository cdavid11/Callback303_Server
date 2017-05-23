'use strict';
module.exports = function(app) {
var todoList = require('../controllers/testController');


  // todoList Routes
  app.route('/chants')
    .get(todoList.list_all_chants)
    .post(todoList.create_a_chant);


  app.route('/chants/:chantID')
    .get(todoList.read_a_chant)
    .put(todoList.update_a_chant)
    .delete(todoList.delete_a_chant);
};