const Player = require("../models/player");


exports.getPlayer =async function (req, res, next) {
    try {
       const  result =await Player.find();
        console.log(result);
    res
      .status(200)
      .json({  status: true, result});
    }catch (err) {
        console.log(err);
        res.status(500).json({
          err,
          message: "Server error",
        });

    }   
};

  exports.register = async (req, res, next) => {
  try {
    
    const player = new Player(req.body);
    console.log(player);

    const result = await player.save();
    console.log(result);

    res.json({ player, result });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      err,
      message: "Server error",
    });
  }
};
exports.login = async function (req, res, next) {
  try {
    const { email, password } = Player(req.body);
    console.log({email,password});
    const player = await Player.findByCredentials(
      email,
      password
    );
    console.log(player);
    const token = await player.generateAuthToken();
    res.status(200).json({
      status: true,
      _id: player._id,
      id: player.id,
      cin: player.cin,
      name: player.name,
      email: player.email,
      dateNaiss: player.dateNaiss,
      lieuNaiss: player.lieuNaiss,
      codePostal: player.codePostal,
      telephone: player.telephone,
      token,
    });
  } catch (error) {
    res.status(400).json({ status: false, error: error.message });
  }
};