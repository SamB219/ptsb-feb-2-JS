
//  ! API: Application Programming Interaface
// this is a way for a client to communicate with the server/browser
// Allows for a HTTP request and response lifecycle
// Part of a RESTful architecture
// ? REST: Representational State Transfer
// stateless, cacheable, layered system allow for req abd res using
// ? CRUD: Create, Read, Update, and Delete
// HTTP methods: POST, GET, PUT, DELETE
// HTTP requests sent from the client
// headers
// body (POST, PUT)
// query parameters (GET, DELETE)
// HTTP response received from the server
//  headers
//  status code
//  contains payload

//  ! URL or URI
// Uniform Resource Locator (Identifier)
// address that allows us to access web resources
//  DNS (domain name) server resolves the url string into an IP address

// !   example: http://www.example.com:80/path/to/myfile.html?key1=value&key2=value2#SomewhereInTheDocs
// ?            Scheme://Domain Name:Port/Path to file?Parameters#Anchor

//  - www.google.com --> domain
//          - can have subdomains (ex: gmail.google.com)
        // -.com   .net    .gov    .co.uk
        // Port :80 for HTTP or : 443 for HTTPS
        // PAth
//  Location and structure of content within the resource
//  ? Query Parameters
//  map to key-value pairs within an object
//  begins with "?"
//  seperated by "&"
// ? Anchor
//  id's that allow us to go to a specific point in a document

//  ! Fetch API
//      fetch is an asynchronous function
// ? 1. Fetch your resource and return promise
// ? 2. Use .then resolver to catch fetch's return and assign to a parameter
// ? 3. The parameter is part of a Response interface object
// ? 4. Body of our response is inaccessible. It's part of a readbale stream object
// ? 5. Utilize Response interface's .json() method to read the object
// ? 6. .json() method returns a promise
// ? 7. Resolve the promise with one more .then() resolver
// ? 8. Catch (.catch()) the return as a data parameter

// ! Document site: https://pokeapi.co/

const url = `https://pokeapi.co/api/v2/pokemon/`;

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.results)

        data.results.forEach(pokemon => {
            let h3 = document.createElement('h3');
            h3.textContent = pokemon.name;
            document.body.appendChild(h3);
        });
    })
    .catch(err => console.error(err));

// fetching with a async func
async function getData() {
    try {
        
        const res = await fetch(`${url}pikachu`);
        const data = await res.json();
        console.log(data);

    } catch (err) {
        console.log(err);
    }
}

getData();