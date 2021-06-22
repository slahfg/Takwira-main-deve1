const Inscription = require("../models/Inscription");

exports.saveInscription = data => {
  const inscription = new Inscription(data);
  return inscription.save(data);
};

exports.findInscriptionThisYear = data =>
  Inscription.find({
    ...data,
    date: { $gte: `01-01-${(new Date()).getFullYear()}` }
  });
