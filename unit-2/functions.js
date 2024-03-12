/* 
    ? Functions
    * a block of reusable code; it can:
    * take in arguments thru its parameters (doors to inside fx)
    * perform an action
    * and return a result
    
    ? There are two main types of functions
    * function declaration
        * hoisted
    * function expression
        * not hoisted
    
        ? Functions
    * need to be invoked (called) to run
    * can have none, one, or many parameters
    * data coming thru the parmeter is called an argument
    * can only have one return statement value
    * if no return is provided, it defaults to undefined
    
    Syntax:

    function identifier(parameter, parameter, ...) {
        function code block
        return statement
    }
*/
// Function definition
function sayHello() {
    console.log("Hello February Cohort")
}

// Function invocation (calling)
sayHello()

function greetClassmates(name) {
    console.log(`Hello, ${name}`)
}

greetClassmates("Lucas")
greetClassmates("Andrew")

let someVariable = "Paul"
console.log("HEREREREREE", someVariable)
let studentName = greetClassmates("Sajjad")
console.log("------------", studentName)

function startCar(make) {
    return `${make} is on`
}

let bmw = startCar("BMW")
console.log(bmw)

console.log(startCar("Porsche"))


/* 
    ? Challenge
    * create a function declaration called addNums
    * it will take two parameters
    * it will reurn the result of the two numbers added
*/
 function addNums(nums, num){
    return nums + num
 }
 console.log(addNums(3, 6))

/* 
    ? Function Expression
    * utilizes a variable as a placeholder

    Syntax:
    let identifier = function(params) {
        code block
        return statement
    }

*/

let nameAge = function(name, age) {
    return `Your name is ${name} and you're ${age} years old`
}
console.log(nameAge("Sam", 24))

/* 
    ? Pythagorean Theorem Challenge
    * right triangle has three sides
    * the longest side c is calculated by taking the sum of:
    * a**2 + b**2
    * the formula is as as follows c = sqrt(a**2 + b**2)
    * Create a function expression that takes two triangle sides
    * return the hypoteneuse (c side)
    * hint: Math object has a .sqrt method()
*/

let pt = function(a, b){
    return Math.sqrt(a**2 + b**2)
}

console.log(pt(8, 5))


/* 
    ? Arrow Functions
    * introduced in ES6
    * concise way of writing functions
    * part of fx expression family
    * do not bind to .this or super (more on that in Classes)
    *
*/
/* 
    ? Concise Body Arrow Function
    * can have none or one paramter ONLY
    * code block must NOT have { }
    * return statement must be implicit
*/

let greetEveryone = () => `Hello everyone`

let greetDoctor = drName => `Hello, Dr. ${drName}`

console.log(greetEveryone())
console.log(greetDoctor("Jack"))

// ? Block Body Arrow Functions

let concatenateStrings = (str1, str2) => {
    if (typeof str1 != "string" || typeof str2 != "string") {
        return `You can only pass string values as arguments`
    } else {
        return str1 + str2
    }
}
console.log(concatenateStrings("Archana", " Henry"));


// ? Immediately Invoked Function Expressions (IIFE)

(function() {
    console.log("I'm an IIFE")
})()

/* 
    ? FizzBuzz 2.0
    * use your fizzBuzz code from earlier BUT
    * wrap it inside of a function
    * allow me to choose my start value
    * allow me to choose my stop value
    ! SPICEY MODE
    * ensure values are only positive
*/


// for (let i = 0; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("Fizz Buzz")
//     } else if (i % 5 == 0) {
//         console.log("Buzz")
//     } else if (i % 3 == 0) {
//         console.log("Fizz")
//     } else {
//         console.log(i)
//     }
// }


// function fizzBuzz(start, stop) {
//     for (let i = start; i <= stop; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log("FizzBuzz");
//         } else if (i % 5 == 0) {
//             console.log("Buzz");
//         } else if (i % 3 == 0) {
//             console.log("Fizz");
//         } else {
//             console.log(i);
//         }
//     }
// }
//  fizzBuzz(1, 100)



//  function fizzBuzz(start, stop) {
//     if (start >= 0 && stop >= 0) {
//         for (let i = start; i <= stop; i += 1) {
//             i % 15 == 0 ? console.log("FizzBuzz")
//                 : i % 3 == 0 ? console.log("Fizz")
//                 : i % 5 == 0 ? console.log("Buzz")
//                 : console.log(i)
//         }
//     } else {
//         console.log("You didn't provide us with positive values yo")
//     }
// }

// fizzBuzz(1, 125)

/* 
    ? Reverse Words in a String
    * write a function that takes a string as input
    * it must return the same string with the order of the words reverse
    * ex: paul returns luap
    * your task is to implement reverseWords function and test with different inputs
*/


// function reverseString(str) {
//     // Split the string into an array of characters, reverse it, and join it back into a string
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("Test"))


function split(str) {
    return str.split('')
}

function reverse(str) {
    return str.reverse()
}

function join(str) {
    return str.join('')
}

 let stringReverse = function reverseString(str){
    return split() + reverse() + join()
}
console.log(stringReverse("Hello"))