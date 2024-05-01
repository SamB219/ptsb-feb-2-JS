
const router = require('express').Router();
const User = require('../models/users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT;

// encripts the password
const testingBcrypt = password => {

    let encrypt = bcrypt.hashSync(password, 13);
    console.log(`ENCRYPT: `, encrypt);
}


router.post('/signup',  async (req, res) => {
    // res.status(200).send('Connected');
    testingBcrypt('password');
    testingBcrypt('password');
    try {
        const { firstName, lastName, email, password} = req.body // this cleans up the code and does the same as the commented out code below
        // Capture Data from client
        const user = new User({ // this is a class ... thats called from user.models.js
            // firstName: req.body.firstName,
            // lastName: req.body.lastName,
            // email: req.body.email,
            // password: req.body.password
            firstName,
            lastName,
            email,
            password: bcrypt.hashSync(password, 13)
        }) // using values from req.body to form our user document

        const newUser = await user.save();
        // writes to our database . Returns a response-- which is why it should be an await
        const token = jwt.sign(
            {id: newUser._id}, // payload
            SECRET, //message
            { expiresIn: "1 day"} // options
        )

        res.status(200).json({
            user: newUser,
            message: "Success!",
            token
        })

    } catch (error) {
        res.status(500).json({
            ERROR: error.message
        })
    }
})

router.post('/login', async (req,res) => {
    // res.send(req.body.email);
    try {
        
        //1. Capture Data provided by the user (body)
        const { email, password } = req.body
        
        //2. Check database (db) to see if email given exists
        const user = await User.findOne({email: email});
        // * A MongoDB method that accepts a query as an arg... returns an instance of a document that matches
        // console.log(user);
        if(!user) throw new Error(`Email or Password doesn't exist`);
        //3. If email exists, consider if password matches
        const passwordMatch = await bcrypt.compare(password, user.password); // returns a true/false value
        // * .compare(string, hashed)

        // console.log(passwordMatch)
        if(!passwordMatch) throw new Error(`Email or Password doesn't exist`);
        //4. After verified, provide a jwt token

        const token = jwt.sign(
            {id: user._id}, // payload
            SECRET, //message
            { expiresIn: "1 day"} // options
        )


        //5. Response status returned
        res.status(200).json({
            message: "Successful",
            user,
            token
        })

    } catch (err) {
        res.status(500).json({
            ERROR: err.message
        })
    }

})


module.exports = router;