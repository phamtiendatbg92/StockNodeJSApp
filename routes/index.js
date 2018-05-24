var express = require('express');
var router = express.Router();
var mySqlConnecor = require('../api/controller/DBConnector');

var mysql = require('mysql');



/* GET home page. */
router.get('/', function(req, res, next) {
  var option ={
    title:'Bar chart',

  };
  res.render('index', option);
});

module.exports = router;
