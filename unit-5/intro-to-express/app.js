

const express = require('express'); // being pulled from our node modules
const app = express(); // simplifying the method call
const PORT = 4000; // server port within localhost. Using 'all caps' to indicate a 'general'

const practiceController = require('./controllers/practice.controller');

app.use(express.static(`${__dirname}/public`));
// __dirname comes from node
// console.log('pathname: ',  __dirname) // logs the pathway

app.use('/practice', practiceController);
// Any traffic coming in that has "practice" after localhost:4000 will route to practice.controller.js
// example: localhost:4000/practice



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`); //providing feedback to tell us it is running
});


