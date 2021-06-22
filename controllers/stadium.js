const Stadium = require("../models/stadium");

exports.getStadium =async function (req, res, next) {
    try {
       const  result =await Stadium.find();
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
    
    const stadium = new Stadium(req.body);
    console.log(stadium);

    const result = await stadium.save();
    console.log(result);

    res.json({ stadium, result });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      err,
      message: "Server error",
    });
  }
};