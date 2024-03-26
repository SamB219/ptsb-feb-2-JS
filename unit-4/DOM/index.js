// Dom --- Document Object Model
//  Only Through the Browser

// console.log(window);
// alert("WARNING")
// prompt()
// confirm("are you sure?")

console.log(document.title);
document.title = "DOM Lesson Updated";
console.log(document.title);

// ! 1- creating an element
let h1 = document.createElement('h1');
console.log(h1);

// variable now has access to properties--- seen in the browser inspect
// innerHTML: can inject a block of HTML
// innerText: returns the visible text contained
// textContent: returns the full text

// ! 2- applys the value
h1.innerText = "Creating my first DOM Element :)\n\n.appendChild makes the heading appear";
console.log(h1);

// chain of events
// 1- Create our Element
// 2- Apply out values(s)
// 3- Place our element 

// ! 3- placing the element
document.body.appendChild(h1);

h1.style.color = "darkgreen";
h1.style.textAlign = "center";
h1.style.backgroundColor = "white";
// can include multiple things


// ! Finding Elements
// HTMLCollection- an array like object
// -allows access to indexedDB, properties, and methods to help naviagte and modify
// does NOT allow you to modify a group of elements all at once
// can lopp thru it
// can use .length property to get the size of the list

// ! To get Element
// use array notation OR use .item() method
// 
// accessing multiple elements requires these methods
// getElementsbyTagName()
// querySelectorAll()
// getElementsByClassName()

let li = document.getElementsByTagName("li");
console.log(li);

let bathroom = li[0];
bathroom.style.color = "green";

for(i of li) {
    i.style.color = "pink"; 
    i.style.textAlign = "center";
}


// ! .querySelector()
// grabs the first instance of an element of null if nothing is found
// can target by id, class , or element

let firstLi = document.querySelector("li");
// 
let toDoList = document.querySelector("#listTitle");
toDoList.style = `
        border-style: solid;
        background-color: lightpink;
        text-align: center;
        font-size: 35px;
`

// ! .querySelectorAll()
// returns a static nodelist (an array) list of elements
console.log(document.querySelectorAll('li'));

//  ! .getElementsByClassName('class');
// all of these methods can be seen by inspecting the browser--- Console
let liClass = document.getElementsByClassName('listItem');
console.log(liClass);

// ! Event Listeners
// Allow us to execute a function when an eventr occurs
// ! .addEventListener("event", () => {})
// DOM node method --- It requires an event to "Listen For" and a callback function

let btn = document.getElementById("submit");

btn.addEventListener("click", (event) => {
    console.log(event);
    console.log('Someone Clicked the Button')
})

// ! Adding an item to the List
// STEPS
// 1 Capture the input
// 2 access the parent element
// create a new element (li)
// assign value to the attributes "text value from input field"
// append to parent element .appendParentElement

btn.addEventListener("click", addItem);

let input = document.getElementById('listInput')
let ul = document.querySelector("#ulToDo")

function addItem() {
    // console.log(input.value);

    let newItem = document.createElement('li');
    newItem.textContent = input.value;
    newItem.style = `color: lightblue;`
    newItem.style.textAlign = "center";
    

    ul.appendChild(newItem)
}


// ! Create Something New
// ? Global Variables
let buildBtn = document.getElementById('table-btn');
let shellDiv = document.getElementById('shell-div');

const myList = [
    'red', 'blue', 'green', 'purple', 'yellow', 'orange', 'pink', 'white'
]

// ? Function to Build and Display

const buildTable = () => {
    myList.forEach((color, i) => {
        // console.log(color);

        // Create elements
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');

        // Assign Values
        h2.textContent = color;
        h2.style.color = color;
        p.innerHTML = `
            Item <u><b>${i}</b></u> in my list
        `

        // Set to Parent
        div.appendChild(h2);
        div.appendChild(p);
        shellDiv.appendChild(div);
    })

    shellDiv.style = `
        display: flex;
        align-items: space-around;
        font-size: 35px;
        border-style: solid;
        border-size: 30px;
        background-color: lightpink;
    `
}


// ? Event Listener
buildBtn.addEventListener('click', buildTable);
