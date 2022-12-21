const controller = require("../controllers/customer.controller");
const { authJwt } = require("../middleware");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    })

    app.post(
        "/api/customer/add", 
        [authJwt.verifyToken],
        controller.add
    );

    app.get(
        "/api/customer/getall",
        [authJwt.verifyToken],
        controller.getAll
    )

    app.get(
        "/api/customer/getOne/:id",
        [authJwt.verifyToken],
        controller.getOne
    )

    app.post(
        "/api/customer/update/:id", 
        [authJwt.verifyToken],
        controller.updated
    )

    app.delete(
        "/api/customer/delete/:id",  
        [authJwt.verifyToken],
        controller.delete
    )
}