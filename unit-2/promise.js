// setTimeout(
//   () => {
//     console.log("You will Learn Promises! ");
//   },

//   2000
// );


//  Syntax Of a promise 

let promise = new Promise((resolve, reject) => {
    let a = 1 + 1;
  
    if (a === 2) {
      resolve(`Success it does equal 2`);
    } else {
      reject(`unsuccessful`);
    }
  });
  
  // resolving promises THE BAD WAY THIS IS THE OLD WAY
  
//   promise.then((p) => console.log(p))
//          .catch((message) => console.error(`This failed ` + message));


// NEW WAY async
// async
// async function `name of the function`(){}
// const `name of function` = async function(){}
// const `name of function` = async = () =>{}

// async function find(){
//     try {
//         return `hello`;

//     } catch (error){
//         console.log(error);
//     }
// }

// console.log(find());
// // await keyword only works in an async function

// async function resolvePromise() {
//     try {
//         const value = await find();
//         console.log(value);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  


function promiseNetwork(networkconnection){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(networkconnection){
                resolve(`This data is valid`);
            } else {
                reject(`Invalid Data`);
            }
        },3000);
    })
}


async function handlePromise (){
    try {
        const data = await promiseNetwork(true);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
handlePromise()