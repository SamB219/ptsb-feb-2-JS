


// function promiseNetwork(networkconnection){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(networkconnection){
//                 resolve(`This data is valid`);
//             } else {
//                 reject(`Invaild Data`);
//             }
//         },3000)
//     });
// }


// async function handlePromise(){
//     try {
//         const data = await promiseNetwork(true)
//         console.log(data)
//     } catch (error) {
//         console.error(error)
//     }
// }
// handlePromise();











// function websitePromise(websitedata){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             if (websitedata){
//                 resolve(`This data is valid`)
//             } else {
//                 reject(`Unsuccessful`)
//             }
//         },5000)
//     })
// }

// async function handleWebsite(){
//     try {
//         const data = await websitePromise(true)
//         console.log(data)
        
//     } catch (error) {
//         console.error("Failed")
//     }
// }

// handleWebsite()





















// function promiseNetwork(websitedata){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             if (websitedata){
//                 resolve(`This Is Valid Data Thanks`)
//             } else {
//                 reject(`This Didn't Fucking Work`)
//             }
//         },4000)
//     })
// }

// async function grabWebsite(){
//     try {
//         const data = await promiseNetwork(true);
//         console.log(data)
        
//     } catch (error) {
//         console.error(error)
        
//     }
// }




// grabWebsite();


// let a = 5
// let b = 3



// let add = ()=>{
//     return console.log(a + b)
// }

// add()



// const sayHello = (firstName, lastName) => {
//     return console.log(`Hello ${firstName} your last name is ${lastName}`)
// }
// sayHello("sam", "biamonte")





// function promiseObject(object){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(object){
//                 resolve(`Hello World`);
//             } else{
//                 reject(`Invalid Data`);
//             }

//         },2000);
//     })
// }

// async function handlePromise(){
//     try {
//         const data = await promiseObject(true);
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// handlePromise()













// function promise(websitedata){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(websitedata){
//                 resolve(`Hello World :) I Keep Promises`);
//             } else {
//                 reject(`You're a Piece of Shit`)
//             }
//         },3000)
//     })
// }

// async function promiseKept(){
//     try {
//         const info = await promise(true)
//         console.log(info)
//     } catch (error) {
//         console.error(error)
        
//     }
// }
// promiseKept()






// let a = 4*5
// let b = 4

// let addUp = ()=>{
//     return console.log(a + b);

// }


// addUp()





// Your code here, reference the instructions if you're unsure how to start

let menu = {
    burger: 5.00,
    fries: 3.50,
    shake: 1.11,
    salad: 4.25,
  
    order: function(orderPlaced) {
      let orderSplit = orderPlaced.split(',');
      let sum = 0;
      for (let item of orderSplit) {
        sum += this[item.trim()]; // Accessing the menu items using `this`
      }
      console.log(sum.toFixed(2)); // Print the total sum
    }
  }
  
  // Call the order method with different combinations of menu items
  menu.order("burger, fries");
  menu.order("salad, shake");
  