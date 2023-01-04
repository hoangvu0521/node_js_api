var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'laravel_crud'
});

connection.connect(function(err) {
    if (err) console.log("Ket noi CSDL khong thanh cong");
});

module.exports = connection;