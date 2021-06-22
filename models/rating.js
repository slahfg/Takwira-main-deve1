const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  rat: { type: Number, require: false, default: 1 },
  player: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  stade: { type: mongoose.Schema.Types.ObjectId, ref: "Stadium" },
  created_at: { type: Date, default: Date.now, required: false },
  updated_at: { type: Date, default: Date.now, required: false },
  active: { type: Boolean, default: true },
});

const owner = mongoose.model("Rating", ratingSchema);

module.exports = rating;