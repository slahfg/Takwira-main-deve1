const mongoose = require("mongoose");

const CONNEXION_URL =
  //process.env.CONNEXION_URL ||
  "mongodb+srv://slahDBRoot:elBg3TJEDjG6Fway@cluster0.pdj63.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports.connect = () =>
  mongoose.connect(
    CONNEXION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
      err
        ? console.log("MONGOOSE ERROR :\t", err)
        : console.log("Connected to database");
    }
  );
