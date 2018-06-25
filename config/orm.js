var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

// Create object with methods to handle the data
var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            console.log(queryString);
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // UPDATE `burgers_db`.`burgers` SET `devoured`='0' WHERE `id`='1';
    update: function(tableInput, condition, cb) {
        console.log('ORM UPDATE CONDITION (SHOULD BE ID): ',condition);
        connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id = '+ condition +';', function(err,result){
            if (err) throw err;
            cb(result);
        });
    },

    // INSERT INTO burgers_db.burgers (burger_name, devoured) VALUES ("goodburger", "0");
    create: function(tableInput, cols, vals, cb) {
        var queryString = "INSERT INTO " + tableInput;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }      
            cb(result);
        });
    },
};

module.exports = orm;