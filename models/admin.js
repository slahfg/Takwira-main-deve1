const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const adminSchema = mongoose.Schema({
  
  nom: { type: String, required: true, default: "" },
  prenom: { type: String, required: true, default: "" },
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
  password: { type: String, required: true, default: "" },
  created_at: { type: Date, default: Date.now, required: false },
  updated_at: { type: Date, default: Date.now, required: false },
  active: { type: Boolean, default: true },
});

adminSchema.pre("save", async function(next) {
  // Hash the password before saving the admin model
  const admin = this;
  if (admin.isModified("password")) {
    admin.password = await bcrypt.hash(admin.password, 8);
  }
  next();
});

adminSchema.methods.generateAuthToken = async function() {
  // Generate an auth token for the admin
  const admin= this;
  const token = jwt.sign({ _id: admin._id }, "21695848985");
  etudiant.tokens = admin.tokens.concat({ token });
  await admin.save();
  return token;
};

adminSchema.statics.findByCredentials = async (email, password) => {
  // Search for a admin by email and password.
  const admin = await admin.findOne({ email });
  if (!admin) {
    throw new Error("Invalid login credentials");
  }
  const isPasswordMatch = await bcrypt.compare(password, admin.password);
  if (!isPasswordMatch) {
    throw new Error("Invalid login credentials");
  }
  return admin;
};

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
