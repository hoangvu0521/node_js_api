module.exports = function(router) {
    var homeController = require('../controllers/home.controller');
    var JWT = require("../common/_JWT");

    router.get("/", homeController.home);

    router.get("/about", homeController.about);

    router.get("/token", async function(req, res) {
        var user = {
            name: "Admin",
            email: "admin@gmail.com"
        };
        const _token = await JWT.make(user);
        res.send({ token: _token });
    });

    router.get("/check_token", async function(req, res) {
        try {
            var _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJBZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIn0sImlhdCI6MTY3Mjg5MzE3MywiZXhwIjoxNjcyODk2NzczfQ.e9OHqagoiKFpPoToF77wm-VCbn_YvNSzHrfc4cyUF5c";

            const data = await JWT.check(_token);
            res.send({ data: data });
        } catch (error) {
            res.send({ data: "Ma token khong hop le" });
        }
    });
};