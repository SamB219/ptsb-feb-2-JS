//  ! Promise
// an object gets returned that may produce a singular value
// ? 3 states
// pendingf
// fulfilled
// rejected

// ? promises take 2 parameters--- (Resolve, Reject)


// ! Mock Internet Send
function getData(cb) {
    setTimeout(() => {
        cb("some data!")
    }, 3000)
}

// let data = getData();  
// // the value here comes late -3 secs, we get undefined because it's delayed...
// console.log(data);
// getData(data => console.log(data));
// console.log("hello world")

function returnData() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(true) { //determines resolved or rejected with true & false
                resolve('some data from Promise')
            } else {
                reject("This is Rejected")
            }
        })
    }, 5000)
}
console.log(returnData())

// when returned the returnData() function will return a promise instead of a given string
// chained with Keywords:
// .then() if success - can be chained together
// .catch() if error - takes in a callback function
// only put a semicolon   ;   after the last resolver


// all of this could be written on one line-- spaced out to read easier
returnData().then(data => console.log('From Response: ', data))
.then(() => {
    let x = 10;
    let y = 20;
    console.log(x + y)
})
.catch(function(err) {
    console.error(err);
});

// ! Process of Creating a new Promise
// resolve / reject are params
// setTimeout is acting as our "waiting" for resource
// resolve or reject said promise
// when returned it returns a promise object - NOT a string
// use of resolvers .then() . catch() with CB functions to extrapolate the info from that promise object
