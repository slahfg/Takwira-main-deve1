const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  url: [{ type: String, required: false, default: "" }],
  stade: { type: mongoose.Schema.Types.ObjectId, ref: "Stade" },
  created_at: { type: Date, default: Date.now, required: false },
  updated_at: { type: Date, default: Date.now, required: false },
  active: { type: Boolean, default: true },
});

const image = mongoose.model("Image", imageSchema);

module.exports = image;