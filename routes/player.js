const auth = require("../middlewares/authPlayer");
const express = require("express");
const router = express.Router();
const players = require("../controllers/players");

router.post("/register", players.register);
router.get("/all", players.getPlayer);
router.post("/login",auth, players.login);
//router.post("/logout", players.logout);

module.exports = router;

