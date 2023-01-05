var User = require('../models/user.model');
var JWT = require("../common/_JWT");

exports.get_list = function(req, res) {
    User.get_all(function(data) {
        res.send({ result: data });
    });
};

exports.detail = function(req, res) {
    User.getById(req.params.id, function(response) {
        res.send({ result: response });
    });
};

// body-parser
exports.add_user = function(req, res) {
    var data = req.body;
    User.create(data, function(response) {
        res.send({ result: response });
    });
}

exports.remote_user = function(req, res) {
    var id = req.params.id;
    User.remove(id, function(response) {
        res.send({ result: response });
    });
}

exports.update_user = function(req, res) {
    var data = req.body;
    User.update(data, function(response) {
        res.send({ result: response });
    });
}

exports.login = function(req, res) {
    var data = req.body;
    User.check_login(data, async function(response) {
        if (response) {
            const _token = await JWT.make(response);
            res.send({ result: _token });
        }
        res.send({ result: response });
    });
}