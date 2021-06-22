const auth = require("../middlewares/authPlayer");
const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin");

router.post("/register", admin.register);
router.get("/all", admin.getAdmin);
router.post("/login",auth, admin.login);
//router.post("/logout", admin.logout);

module.exports = router;

