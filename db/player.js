const Player = require("../models/player");

exports.findPayerByCredentials = (email, password) =>
  player.findByCredentials(email, password);

exports.savePlayer = player => {
  return new player(player)
  
    .then(player => {
      if (!player) throw new Error("Error while inserting data to DB !!");
      return player.generateAuthToken();
    })
    .catch(error => {
      throw new Error(error.message);
    });
};

exports.getToken = etudiant => {
  Etudiant.findOne(etudiant)
    .then(
      etudiant => (
        console.log("tokinito", etudiant), etudiant.generateAuthToken()
      )
    )
    .catch(err => console.log(err));
};

exports.getAllIds = () =>(console.log("getAllIds"),
  Etudiant.find().then(etudiants =>
    etudiants.map(e => ({ _id: e._id, email: e.email }))
  ));
