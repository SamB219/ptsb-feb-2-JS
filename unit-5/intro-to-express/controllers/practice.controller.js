

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

router.post('/json', (req,res) => {
    console.log(req.body)

    // destruction the object
    const { name } = req.body;
    res.status(200).send(`Hello, ${name}`)
})

// Wildcard Endpoint

router.get("*", (req,res) => {
    // "*" accounts for a wildcard or anything that hasnt been defined
    // provide a clean response back to a user
    res.status(404).send(`<img src="https://http.cat/404" alt="status code 404"/>`)
})