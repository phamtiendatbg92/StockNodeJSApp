var express = require('express');
var router = express.Router();
var utils = require('../api/common/utils');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    utils.getLatestPrice('ETHUSDT', (jsonData) => {
        res.send(JSON.stringify(jsonData));
    })
});

module.exports = router;
