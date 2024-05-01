# Traditional DataBase

Database:
- Types:
    - Relational
        - SQL, PostgreSQL, MySQL
    - Non Relational
        - MongoDB, Apache Cassandra, Couchbase
- Collection of tables or documents 
    - Tables:
        - Primary Keys (ID)
        - Records: Data within rows of a table
- Mongo
    - Database = Database
    - Collection = Table
    - Documents = Records
        -Stored a JSON
    - Is a **Document Data Store**
    

# MERN Stack
- M: Mongo
- E: Express
- R: React
- N: Node

# Express
- Need a `package.json` file
    - run `npm init` or `npm init -y`
- Install Dependencies:
    - Express: ` npm i express`
    - Mongoose: `npm i mongoose`
        - package that connects MongoDB
    - dotenv: `npm i dotenv`
    - **NOTE:**
    - We can install multiple dependencies at once with:
        - `npm i express mongoose dotenv`
    - Entry point within `package.json`
    - `index.js` || `app.js`
        - ignore files / folders that shouldn't be in our Github repo 
            -ex: node_modules & .env

-- git ignore file just ignores files for GitHub... not your program

# .env
- Contains constants that are specific for our envirnment
- Stores items that we don't want published
    - passwords / portnumbers / deplotment routes / keys
- Should be added to `gitignore`
- Should have a sample version to communicate with team
    - `example.env`

# Mongo and Mongoose
- Needs to connect to our database
- Using **MongoDB Compass**
- Statful connection
EX:
```js
const mongoose = require('mongoose');
const MONGO = process.env.MONGODB;
mongoose.connect(`${MONGO}/moviedb`);
const db = mongoose.connection;
db.once("open", () => log(`Connected: ${MONGO}`));
```

## Models
- Define what our data collection will look like
- A schema for each object being created
- `mongoose` esablishes our schema

Example:
```js
const UserSchema = new mongoose.Schema({
    // columns for our document (in a collection)
    firstName: {
        type: String, // What datatype this is expecting
        required: true // default is false
    }
})
```
<!-- /*
! CHALLENGE:
    - Add a boilerplate code for the controller
    - Create a POST method route ('/signup')
    - Make sure route is working
        - simple response of "Connected"
        -Test in Postman
    - full URL is:
        - localhost:4000/user/signup
*/ -->

## Bcrypt --- npm i bcrypt --- installs Bcrypt ---  // npm.com to see other install options
`npm i bcrypt`   a form of encryption
- dependency that handles encryption of data
- mostly common for passwords (but not limited)

### Encryption
- Plain text passwords are not secure when stored within the database.
- Allows another layer of security for both users and the application
- If the database never knows it, less desired to "hack"

## Hashing
- An algorithm to change the plain text into various characters
- transformed as a **one way value**
- practically impossible to turn hashed value back into the original string
- Encrypted prior to storing to Database
- No matter the length of string (password), hash value is the same length
- Like strings will result in the same hashed output.
-  **needs `salting`**

## Salting
- includes random strings within the plain text being hashed
- Makes for unpredictablity for the hashed value 
- we can denote the number of "salts"
- Good value is 10-13 interations

ex:
```js
bcrypt.hashSync("abc", 10);
```
- first param = string (password)
- second param = number of times the password will be (randomized)

## JWT / JSON Web Token
- `npm i jsonwebtoken`
- A way for our server to authenticate the user

example code :
```js
const token = jwt.sign({id: user._id}, "secret message", {expriresIn : 60 * 60 *24})
```
- `sign(payload, message, options)`
- 3 arguments:
- payload
- In the sample we are using an object that details the id of the user
- encrypt / decrypt aa message
- passed in as a string in the sample
- typically store as a variable in the `.env`
- options (expiration)
- represents seconds or a string time span
- ex: `2 days` or `10h`


/* 
! Challenge
    - Create a Schema called MovieSchema
    - Properties within:
        "title": string, required
        "genre": string
        "rating": string, required
        "length": number, required
        "releaseYear": number
    - Create a new controller called `movie.controller.js`
      - boilerplate the controller (no routes are needed right now)
      - consider the file/folder structure.
    - Connect the controller to the application (app.js)
    - Connect the MovieSchema to the controller.
        
    Note:
        Consider how the User model was created.
*/