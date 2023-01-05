const jwt = require("jsonwebtoken");
const _APP = require("./_APP");

// make => Tạo mã tokens
let make = function(user) {
    return new Promise(function(resolve, reject) {
        jwt.sign({ data: user },
            _APP.ACCESS_TOKEN, {
                algorithm: "HS256",
                expiresIn: _APP.TOKEN_TIME_LIFE
            },
            function(err, _token) {
                if (err) reject(err);
                resolve(_token);
            });
    });
};

// Check => xác thực đúng, sai, hết hạn
let check = function(token) {
    return new Promise(function(resolve, reject) {
        jwt.verify(token,
            _APP.ACCESS_TOKEN, {
                algorithm: "HS256",
                expiresIn: _APP.TOKEN_TIME_LIFE
            },
            function(err, data) {
                if (err) reject(err);
                resolve(data);
            },
        )
    });
};

module.exports = {
    make: make,
    check: check,
};