const Owner = require("../models/owner");
const { check, validationResult } = require('express-validator');

exports.getOwner =async function (req, res, next) {
    try {
       const  result =await Owner.find();
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
    
    const owner = new Owner(req.body);
    console.log(owner);

    const result = await owner.save();
    console.log(result);

    res.json({ owner, result });

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
    const { email, password } = Owner(req.body);
    console.log({email,password});
    const owner = await Owner.findByCredentials(
      email,
      password
    );
    console.log(owner);
    const token = await owner.generateAuthToken();
    res.status(200).json({
      status: true,
      _id: owner._id,
      id: owner.id,
      cin: owner.cin,
      name: owner.name,
      email: owner.email,
      dateNaiss: owner.dateNaiss,
      lieuNaiss: owner.lieuNaiss,
      codePostal: owner.codePostal,
      telephone: owner.telephone,
      token,
    });
  } catch (error) {
    res.status(400).json({ status: false, error: error.message });
  }
};