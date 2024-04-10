

// ! Async / Await
// can make any function an async function by adding the  keywords
// ? KEYWORDS
// ? async - denotes a function
// ? await - calls the process to "wait" for a result
// cannot be used in a loop and // !ALWAYS returns a promise

// ? syntax
async function asyncFuncDeclaration() {
    // code block
};

let funcExpression = async function () {
    // code block
};

let arrowFunc = async () => {
    // code block
};


async function extraData() {
    let info = await returnData();
    return(`${info} in some cloud.`);
}
extraData().then(data => console.log(data));