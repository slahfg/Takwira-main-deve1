const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const playerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  cin: {
    type: Number,
    required: true,
    trim: true
  }, 
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: value => {
      if (!validator.isEmail(value)) {
        throw new Error({ error: "Invalid Email address" });
      }
    }
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  },
  dateNaiss: {
    type: Date,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  telephone: {
    type: Number,
    required: false,
  },
  
  tokens: [
    {
      token: {
        type: String,
        required: false
      }
    }
  ],
  created_at: { type: Date, default: Date.now, required: false },
  updated_at: { type: Date, default: Date.now, required: false },
  active: { type: Boolean, default: true },
});

playerSchema.pre("save", async function(next) {
  // Hash the password before saving the player model
  const player = this;
  if (player.isModified("password")) {
    player.password = await bcrypt.hash(player.password, 8);
  }
  next();
});

playerSchema.methods.generateAuthToken = async function() {
  // Generate an auth token for the player
  const player= this;
  const token = jwt.sign({ _id: player._id }, "21695848985");
  player.tokens = player.tokens.concat({ token });
  await player.save();
  return token;
};

playerSchema.statics.findByCredentials = async (email, password) => {
  // Search for a player by email and password.
  console.log(email +"azdazdzdazd");
  const player = await Player.findOne({ email });
  if (!player) {
    throw new Error("Invalid login credentials");
  }
  const isPasswordMatch = await bcrypt.compare(password, player.password);
  if (!isPasswordMatch) {
    throw new Error("Invalid login credentials");
  }
  return player;
};

const Player = mongoose.model("Player", playerSchema);

module.exports =Player ;
