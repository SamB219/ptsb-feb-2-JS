
const router = require('express').Router();

// NOTE: Mock Register
router.post('/register', (req, res) => {
   // console.log("In Auth Controller ", req.datePosted);
   // console.log('headers ' ,req.headers);
    //console.log('body ', req.body);
})

    try {
        const { firstName, lastName, email, password } = req.body;
        res.status(200),send({
            fullName: `${firstName} ${lastName}`,
            email: email,
            password: password,
            date: req.datePosted
        })
    } catch (error) {
        res.status(500).send({
            
        })
    }





module.exports = router;