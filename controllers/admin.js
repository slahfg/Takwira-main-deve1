const Admin = require("../models/admin");


exports.getAdmin =async function (req, res, next) {
    try {
       const  result =await Admin.find();
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
    
    const admin = new Admin(req.body);
    console.log(admin);

    const result = await Admin.save();
    console.log(result);

    res.json({ admin, result });

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
    const { email, password } = Admin(req.body);
    console.log({email,password});
    const admin = await Admin.findByCredentials(
      email,
      password
    );
    console.log(player);
    const token = await admin.generateAuthToken();
    res.status(200).json({
      status: true,
      _id: admin._id,
      id: admin.id,
      cin: admin.cin,
      name: admin.name,
      email: admin.email,
      dateNaiss: admin.dateNaiss,
      lieuNaiss: admin.lieuNaiss,
      codePostal: admin.codePostal,
      telephone: admin.telephone,
      token
    });
  } catch (error) {
    res.status(400).json({ status: false, error: error.message });
  }
};