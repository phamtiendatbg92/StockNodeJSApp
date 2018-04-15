var mysql = require('mysql');

var con = mysql.createConnection({
    host: "http://localhost:5000/phpmyadmin/index.php",
    user: "root@localhost",
    password: "",
    database: "coindb"
});

module.exports.GetAllCommand = function () {
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM command", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            return result;
        });
    });
};