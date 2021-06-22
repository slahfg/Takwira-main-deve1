const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ownerSchema = mongoose.Schema({
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
  stadiums: [{ 
    type: mongoose.Schema.Types.ObjectId,
     ref: "Stadium" ,
     default:null
    }],
  
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
        required: true
      }
    }
  ],
  created_at: { type: Date, default: Date.now, required: false },
  updated_at: { type: Date, default: Date.now, required: false },
  active: { type: Boolean, default: true }
});

ownerSchema.pre("save", async function(next) {
  // Hash the password before saving the owner model
  const owner = this;
  if (owner.isModified("password")) {
    owner.password = await bcrypt.hash(owner.password, 8);
  }
  next();
});

ownerSchema.methods.generateAuthToken = async function() {
  // Generate an auth token for the owner
  const owner= this;
  const token = jwt.sign({ _id: owner._id }, "21695848985");
  etudiant.tokens = owner.tokens.concat({ token });
  await owner.save();
  return token;
};

ownerSchema.statics.findByCredentials = async (email, password) => {
  // Search for a player by email and password.
  const owner = await owner.findOne({ email });
  if (!owner) {
    throw new Error("Invalid login credentials");
  }
  const isPasswordMatch = await bcrypt.compare(password, owner.password);
  if (!isPasswordMatch) {
    throw new Error("Invalid login credentials");
  }
  return owner;
};

const owner = mongoose.model("Owner", ownerSchema);

module.exports =owner ;
