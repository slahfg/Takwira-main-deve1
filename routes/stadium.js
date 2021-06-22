const express = require("express");
const router = express.Router();
const stadium = require("../controllers/stadium");

router.post("/register", stadium.register);
router.get("/all", stadium.getStadium);

module.exports = router;

