let isAuth = async function(req, res, next) {
    var _JWT = require("../common/_JWT");
    var _token = req.headers.authorization;
    if (_token) {
        try {
            var authData = await _JWT.check(_token);

            req.auth = authData;
            next();
        } catch (error) {
            return res.send({ data: "Ma token khong hop le!" });
        }
    } else {
        return res.send({ data: "Ban chua gui ma token!" });
    }
};

module.exports = {
    isAuth: isAuth
}