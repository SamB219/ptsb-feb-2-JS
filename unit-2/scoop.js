// Global, Block, Functional, Module, Lexical

// Global
const x = "play";
//console.log(x);

function start() {
  console.log(x);
}
start();
//const finish = () => {};

// first bracket
// {
  

//   {
//     {
//       {
//         {
//             let pikachu = 100;
//             console.log(pikachu);
//         }
//       }
//     }
  
//   }
// }

function Meeting() {
    let steven = " steven ";

    return function greet(){
        console.log(steven);
    }
  }
  const name = Meeting()
  
  console.log(name());
  