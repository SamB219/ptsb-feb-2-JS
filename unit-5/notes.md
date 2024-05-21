
# Getting Started
-Create a `package.json`
    -In terminal: cli command: `npm init -y`
        -initalizes our Project
    -An Index of the Project
        -denotes required dependencies to run the project.

    -Install our dependencies
        -express: `npm i express`

    -Create a `.gitignore` file
        -`/node_modules` within the file
        -tells our local repository to ignore the `node_modules` folder when pushing to GitHub

    -node_modules folder
        -Provides us access to any behind the scenes .

## Start project with nodemon in gitbash

## Stop project 
    with Ctrl+C

## CRUD (Create Read Update Delete)

    Create: POST
    Read: GET
    Update: PUT / PATCH
    Delete: DELETE


## Postman
-set methods
-GET POST PUT DELETE depending on the route
-body
-  `raw`
- `JSON`
- make a JSON object

## preparing our sever to handle JSON objects
in our app.js we need to have this line of code
app.use(express.json());

this provieds us with access to JSON files

## MVC
stands for model view controller
Architercture pattern that helps the Seperation of Concerns
View: browsers --Postman etc.
Application that interface with the server
Controller: Part of the server application which handles logic
Model: Database schematic

## Middleware
AFunction that accesses the request and response
has a call stack
-request
-response
-next
