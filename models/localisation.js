const mongoose = require("mongoose");

const localisationSchema = mongoose.Schema({
  
  label: { type: String, required: true, default: "" },
  stadium: { type: mongoose.Schema.Types.ObjectId, ref: "Stadium" },
  created_at: { type: Date, default: Date.now, required: false },
  updated_at: { type: Date, default: Date.now, required: false },
  active: { type: Boolean, default: true },
});

const Localisation = mongoose.model("localisation", localisationSchema);

module.exports = Localisation;