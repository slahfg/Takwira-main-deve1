const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authEtudiant");
const etudiantC = require("../controllers/player");
const httpRequest = require("../middlewares/httpRequest");



router.post("/register", httpRequest.parseXml, etudiantC.register);

router.delete("/signout", auth, etudiantC.signout);



router.get("/me", auth, etudiantC.getPlayer);

module.exports = router;
