// DB querys interfaces
const fillierQuerys = require("../db/fillier");
const inscriptionQuerys = require("../db/inscription");
const etudiantQuerys = require("../db/player");

exports.getPlayer = function (req, res, next) {
  const { name, email, id, cin } = req.etudiant;
  res
    .status(200)
    .json({ name, email, id, cin, status: true, message: ` Welcome ${name}` });
};

exports.register = async function (req, res, next) {
  try {
    const token = await etudiantQuerys.savePlayer({
      ...req.body,
      dateNaiss: new Date(req.body.dateNaiss),
    });

    res.json({
      status: true,
      message: `Welcome Mr ${req.body.name} :D`,
      token,
    });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

exports.login = async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const etudiant = await etudiantQuerys.findEtudiantByCredentials(
      email,
      password
    );
    const token = await etudiant.generateAuthToken();
    res.status(200).json({
      status: true,
      _id: etudiant._id,
      id: etudiant.id,
      cin: etudiant.cin,
      name: etudiant.name,
      email: etudiant.email,
      dateNaiss: etudiant.dateNaiss,
      lieuNaiss: etudiant.lieuNaiss,
      codePostal: etudiant.codePostal,
      telephone: etudiant.telephone,
      token,
    });
  } catch (error) {
    res.status(400).json({ status: false, error: error.message });
  }
};

exports.inscrire = async function (req, res, next) {
  try {
    // verify Fillier existance in database
    const fillier = await fillierQuerys.findFillier(req.body.fillier);
    if (!fillier) throw new Error("Fillier not found !!");

    // verify if Etudiant did the inscription for this year
    const listInscription = await inscriptionQuerys.findInscriptionThisYear({
      etudiant: req.etudiant._id,
    });
    if (listInscription.length > 0)
      throw new Error("You are inscri this year !!");

    // save inscription
    await inscriptionQuerys.saveInscription({
      etudiant: req.etudiant._id,
      fillier: fillier._id,
    });
    res
      .status(201)
      .json({ status: true, message: "Your inscription saved successfuly :)" });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
}; 

exports.signout = async function (req, res, next) {
  res.status(200).json({
    status: true,
    msg: "Good bye !!!",
  });
};


