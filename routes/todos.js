var express = require('express');
var router = express.Router();
var todoSchema = require("../api/models/todoModel");


/* Return all todo items */
router.get('/', function (req, res, next) {

    todoSchema.find(function (err, todos) {
        console.log(todos);
        var option = {
            title: 'Todo webpage',
            todos: todos,
        };
        res.render('todo', option);
    });
});

module.exports = router;