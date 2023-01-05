var express = require('express');
var app = express();

// Cấu hình body-parser
var bodyParser = require('body-parser');
const _AuthMiddleWare = require('./app/common/_AuthMiddleWare');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Các routers
require('./app/routes/home.router')(app);
require('./app/routes/account.router')(app);

app.use(_AuthMiddleWare.isAuth); // check token hop le
require('./app/routes/book.router')(app);
require('./app/routes/user.router')(app);

app.listen(3000, function() {
    console.log("Server listening on http://localhost:3000");
});