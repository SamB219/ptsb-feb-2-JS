
require('dotenv').config(); // connects our .env to our project


const express = require('express');
const app = express();
const PORT = process.env.PORT; // points to our envirnment file and puts the value of PORT from that var into this PORT var


// add a route to auth.controller
const userController = require('./controllers/user.controller');
const movieController = require('./controllers/movie.controller');

// ! MongoDataBase Connection

const mongoose = require('mongoose'); //used from node_modules
// targets the var in the .env file with process.env
const MONGO = process.env.MONGODataBase;


// Doesn't display until we have a document inside of our Collection
mongoose.connect(`${MONGO}/moviedb`) // connection middleware. Est. route and defining the collection we are targeting


const db = mongoose.connection; // event listener to check if connected
db.once('open', ()=> { console.log(`Connected: ${MONGO}`)}) // displays the connection point
//MiddleWare
app.use(express.json());// allows us to accepte JSON Data



// Routes anbd Controllers
//all routes after user will use userController
app.use('/user', userController);
app.use('/movies', movieController);



app.listen(PORT, ()=> { console.log(`Movie Server on Port: ${PORT}` )})