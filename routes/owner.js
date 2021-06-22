const auth = require("../middlewares/authPlayer");
const authh=require('../middlewares/auth')
const express = require("express");
const router = express.Router();
const owner = require("../controllers/owner");
const Owner=require("../models/owner")
const jwt=require("jsonwebtoken")
const { check, validationResult } = require('express-validator');



router.post("/register", owner.register);
router.get("/all", owner.getOwner);
//router.post("/login",owner.login);
//router.post("/logout", players.logout);



router.get('/',authh, async (req, res) => {
    try {
        const user = await Owner.findById(req.user.id).select('-password');
        res.json(user);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route POST api/auth
// @desc Authonicate user & get token
// @access Public
router.post('/login', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            //See if user exists
            let user = await Owner.findOne({ email });
            if (!user) {
                return res.status(400).json({ msg: 'email ou password incorrect '  })
            }

          //  const isMatch = await compare(password, user.password);
            if (user.password!==password) {
                return res.status(400).json({ msg: 'email ou password incorrect ' })

            }

            //Return jsonwebtoken

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(payload, "21695848985",
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                });

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error')
        }

    });

    router.post('/registre', [
        check('email', 'Please include a valid email').isEmail(),
        check('name', 'Le nom est obligatoire').not().isEmpty(),
        check('cin', 'cin est obligatoire').not().isEmpty(),
        check('telephone', 'telephone est obligatoire').not().isEmpty(),
        check('adress', 'adress est obligatoire').not().isEmpty(),
        check('password', 'Password is required').isLength({ min: 8 })
    ],
        async (req, res) => {
            
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
    
            const { name, cin, email, telephone, adress, password } = req.body;
    
            try {
                //See if user exists
                let owner = await Owner.findOne({ email });
                if (owner) {
                    return res.status(400).json({ errors: [{ msg: "l'email existe déjà" }] });
                }
    
              //  const isMatch = await compare(password, owner.password);
              
                owner = new Owner({
                    name, cin, email, telephone, adress, password
                });
    
                //Return jsonwebtoken
                
                const payload = {
                    owner: {
                        id: owner.id
                    }
                }
                await owner.save()

                jwt.sign(payload, "21695848985",
                    { expiresIn: 360000 },
                    (err, token) => {
                        if (err) throw err;
                        res.json({ token });
                    });
                  
    
            } catch (err) {
                console.error(err.message);
                res.status(500).send('Server error')
            }
    
        });
    
  

module.exports = router;

