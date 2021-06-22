const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    stade: { type: mongoose.Schema.Types.ObjectId, ref: "Stade" },

  /// 
  created_at: { type: Date, default: Date.now, required: false },
  updated_at: { type: Date, default: Date.now, required: false },
  active: { type: Boolean, default: true },
});

const owner = mongoose.model("Rating", ratingSchema);

module.exports = rating;
