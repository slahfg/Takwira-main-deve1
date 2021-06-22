const Player = require("../models/player");
const jwt = require("jsonwebtoken");


const authPlayer = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace('Bearer ', '');
    const decoded = jwt.verify(token, "21695848985");
    const player = await Player.findOne({
      _id: decoded._id,
      "tokens.token": token
    });
    if (!player) {
      throw new Error();
    }
    req.token = token;
    req.player = player;
    next();
  } catch (e) {
    res.status(401).send({ error: "please authentificate !!!" });
  }
};
module.exports = authPlayer;
