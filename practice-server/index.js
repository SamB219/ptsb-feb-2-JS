
// in git bash while cd'd into the correct location use the following commands
// ? npm install
// ? npm init // will have you press enter to go through some extra methods you can add or edit
// ? code .
// ! package.json can be editted to your liking


// deconstructing methods
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 4000;

app.use(cookieParser());

// sets the home page localhost:4000
app.get("/", (req, res) => {
    res.cookie("Mode", "false")
    res.send("Setting Mode...")
})

//sets the route /dark
app.get("/dark", (req, res) => {
    res.cookie("darkMode", "false");
    // put the res.send's on the bottom of the code block--- can cause errors on the top
    res.send("Setting Dark Mode");
})

// set the route /light
app.get("/light", (req, res) => {
    console.log(req.cookies);
    res.cookie("lightMode", "true");
    res.send("Setting Light Mode");
})


// enables the server
app.listen(PORT, () => console.log(`server is running on ${PORT}`));