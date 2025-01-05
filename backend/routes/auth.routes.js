const authController = require("../controllers/auth.controller");
const authMw = require("../midleware/auth_mw")
module.exports = (app) =>{
    app.post("/registration/api/v1",[authMw.verifySignuBody],authController.signup)
}