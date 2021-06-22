const authh=require('../middlewares/auth')
const express = require("express");
const router = express.Router();
const Reservation=require("../models/reservation")
const jwt=require("jsonwebtoken")
const Stadium=require("../models/stadium")


router.post('/create/:id',async(req,res)=>{

    //const stad=await Stadium.findById(req.params.id)
    const reservation=new Reservation({
        stade:req.params.id,
        date_rent:req.body.date_rent,
        time_rent:req.body.time_rent
    })

    
    await reservation.save()
    const file={
        reserver:reservation._id
    }
    const stad=await Stadium.findById(req.params.id)
    stad.reservation.unshift(file)
    await stad.save() 
    res.json(reservation)
})



module.exports = router;
