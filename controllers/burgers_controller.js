var express = require("express");
var router = express.Router();

// Import (burger.js) from our models folder to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

// Call burger.all and pass burger data into our function
// Add burger data as what we will be sending into our index.handlebars file
// calling burger.all within the burger.js file which is calling orm.all within the orm.js file

router.get("/", function(req, res) {
  console.log('Basic Route Works!');

  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// 
router.put("/api/burgers/update/:id", function(req, res) {
    console.log(req.params.id);
    console.log('OUR PUT ROUTE IS WORKING');

    burger.update(req.params.id, function(result) {
      console.log('result = ' + JSON.stringify(result));
      var hbsObject = { burgers: result };
      res.json({ message: 'Burger devoured'});
    });
});

router.post("/api/burgers/", function(req, res) {
  console.log('create route works!');
  
  burger.create(["id", "burger_name"], [req.body.id, req.body.burger_name], function(result) {
    console.log('bjs create = ' + result);
    // Send back the ID of the new burger
    res.json({ id: result.burger_name });
  });
});

//   burger.insert([
//     "burger_name", "devoured"
//   ], [
//     req.body.name, req.body.devoured
//   ], function(result) {
//     // Send back the ID of the new burger
//     res.json({ id: result.insertId });
//   });
// });

// Export routes for server.js to use.
module.exports = router;
