
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // columns for our document (in a collection)
    firstName: {
        type: String, // What datatype this is expecting
        required: true // default is false
    },
    lastName: {
        type: String, 
        required: true 
    },
    email: {
        type: String, 
        required: true, 
        unique: true // duplicate emails will throw an error
    },
    password: {
        type: String, 
        required: true 
    }
    })




module.exports = mongoose.model('User', UserSchema);