const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
    
   
    stade: { type: mongoose.Schema.Types.ObjectId, ref: "Stadium" },
    date_rent:{type:Date,default:Date.now},
    time_rent:{type:Number,required:true},
  created_at: { type: Date, default: Date.now, required: false },
  updated_at: { type: Date, default: Date.now, required: false },
  active: { type: Boolean, default: true },
});

const reservation = mongoose.model("reservation", reservationSchema);

module.exports = reservation;