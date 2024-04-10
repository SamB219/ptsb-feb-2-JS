

const router = require('express').Router(); // creating a variable -> import Router Engine from Express

router.get('/hello-world', (req, res) => {
    // the pathway is noted as a string "/hello-world"
    // a callback function to handle the request and response (req, res)
    
    res.send('Hello World');
})

module.exports = router;
// ! Don't forget to export the defined route


router.post("/greeting", (req, res) => {
    res.status(200).send("Good Afternoon");
})