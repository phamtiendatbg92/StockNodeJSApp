var express = require('express');
var router = express.Router();

var todoItem = require("../api/models/todoModel");



/* GET users listing. */
router.get('/', function(req, res, next) {

  var item = new todoItem({
    text: "Pham Tien Thanh",
    isDone:true

  });
  item.save(function(err){
      if(err) throw err;
  });

  res.render('respond with a resource');
  // Add object to Mongoo DB
});

module.exports = router;
