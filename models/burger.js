// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// Calling (orm.method), insert burgers as our table input, and running the function of response as a callback
//    that will be sent into our routes (burgers_controler.js) file.
var burger = {
  
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  update: function(condition, cb) {
    orm.update("burgers", condition, function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  
  //
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
