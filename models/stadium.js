const mongoose = require("mongoose");
const Image = require("../models/image")


const stadeSchema = mongoose.Schema({
    label: { type: String, required: false, default: "" },
    titel: { type: String, required: true, default: "" },
    discrption: { type: String, required: true, default: "" },

    locationHelper: { type: String, required: false, default: "" },

    reviews: [{ type: String, required: false, default: "" }],
    reservation:[{reservation:{type: mongoose.Schema.Types.ObjectId,ref:"reservation"}}],

    images:[{ type:mongoose.Schema.Types.ObjectId, ref: "Image", default: null  }],
    rating: { type:mongoose.Schema.Types.ObjectId, ref: "Rating", default: null  },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "Owner" , default: null },
    created_at: { type: Date, default: Date.now, required: false },
    updated_at: { type: Date, default: Date.now, required: false },
    active: { type: Boolean, default: false },
  });
  
  const Stadium = mongoose.model("Stadium", stadeSchema);
  
  module.exports = Stadium;