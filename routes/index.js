var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var option ={
    title:'Bar chart',

  };
  res.render('index', option);
});

module.exports = router;
