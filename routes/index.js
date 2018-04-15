var express = require('express');
var router = express.Router();
var mySqlConnecor = require('../api/controller/DBConnector');

var mysql = require('mysql');



/* GET home page. */
router.get('/', function(req, res, next) {
  var option ={
    title:'Bar chart',

  };
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "coindb"
  });
  
  con.connect(function(err) {
    console.log("11111");
    if (err) throw err;
    con.query("SELECT * FROM command", function (err, result, fields) {
      console.log("22222");
      if (err) throw err;
      console.log(result);
    });
  });
  res.render('index', option);
});

module.exports = router;
