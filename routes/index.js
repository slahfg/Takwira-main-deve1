var express = require("express");
var router = express.Router();
const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEUA10Lj5fyXWzO9O7zcvVVlKv1HdGDVVoQ&usqp=CAU";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    title: "Express",
  });
});
router.get("/slider", function (req, res, next) {
  //get stadiums grom DB tra restarti  C BN ?  chmezel
  const stadiums = [
    { title: " Manzah,", img },
    { title: " Rades,", img },
    { title: " ggg wp ,", img },
    { title: " Rades,", img },
    { title: " PP MM KK ,", img },
    { title: " hhhhhhh,", img },
    { title: " Yaaaaaaaaaaaaah,", img },
    { title: " Rades,", img },
  ];

  res.render("slider", {
    title: "Express",
    kz: "Khalil Zouari was here slmdkj,f",
    stadiums,
  });
});

module.exports = router;
