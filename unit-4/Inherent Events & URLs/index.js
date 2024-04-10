
//  ! Forms 
// default behavior is to send a GET request to the action attribute value
// this can be overriden by using -->
// ? event.preventDefault()

// ! URLs
// ? Uniform Resource Locator
// carries protocol, top domain, sub domain, route, and any queries
// Query params are the data that come from our form
// Begins with ? symbol
// Followed by key=value pair
// Seperated by the & symbol
// ? 127.0.0.1:4000/index.html?email=joe%40email.com&pwd=test


let url = document.location.search;
// creates a location object thatsanitizes query parameters
let params = new URLSearchParams(url);
console.log(params)

// Utilize .get() method of the Location interface to access query value
let email = params.get('email');
let pwd = params.get('pwd');

const btn = document.getElementById('submit');
const output = document.getElementById('output');

const db = [
    {email: "one@email.com", password: "password123"},
    {email: "two@email.com", password: "password_2"},
    {email: "three@email.com", password: "testing3"},
];

btn.addEventListener('click', e => {
    e.preventDefault();
    let email = e.target[0].value;
    let pwd = e.target[1].value;

    const foundUser = db.filter(entry => entry.email === email);

    if(foundUser.length === 0) {
        output.textContent = "No User Found :("
    } else {
        if(foundUser[0].password === pwd) 
            output.textContent = "Logged In :)";
        } else {
            output.textContent = "incorrect email or password"
    }
})