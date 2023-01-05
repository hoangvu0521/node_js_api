const db = require('../common/connect');

const User = function(user) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
}

User.get_all = function(result) {
    db.query("select * from users", function(err, user) {
        if (err) {
            return (null);
        } else {
            result(user);
        }
    });
};

User.getById = function(id, result) {
    db.query(`select * from users where id = ${id}`, function(err, user) {
        if (err || user.length == 0) {
            result(null);
        } else {
            result(user[0]);
        }
    });
};

User.check_login = function(data, result) {
    db.query("select * from users where email = ? and password = ?", [data.email, data.password], function(err, user) {
        if (err || user.length == 0) {
            result(null);
        } else {
            result(user[0]);
        }
    });
};

User.create = function(data, result) {
    db.query("insert into users set ?", data, function(err, user) {
        if (err) {
            result(null);
        } else {
            result({ id: user.inserId, ...data });
        }
    });
};

User.remove = function(id, result) {
    db.query(`delete from user users id = ${id}`, function(err) {
        if (err) {
            result(null);
        } else {
            result("Xoa user co id " + id + " thanh cong!");
        }
    });
};

User.update = function(b, result) {
    db.query("update user set name = ?, email = ?, password = ? where id = ?", [b.name, b.image, b.author_id, b.id], function(err) {
        if (err) {
            result(null);
        } else {
            result(b);
        }
    });
};

module.exports = User;