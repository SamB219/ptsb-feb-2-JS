const fullName = ['Jane', 'Doe'];

// const firstName = fullName[0]
// const lastName = fullName[1]

const [ firstName, lastName ] = fullName;
console.log(firstName);
console.log(lastName);


//* Spread Operator


// you can use this method if you want to edit something, but not alter the original data
const copiedFullName = [...fullName];
console.log(copiedFullName);

fullName.push('Mrs.');
// console.log(fullName, copiedFullName);

// console.log(Math.min(1,5,-3));

const prices = [10.99, 5.99, 3.99, 6.59]
// console.log(Math.min(prices))
console.log(Math.min(...prices))

const persons = [
    { name: 'Jane', age: 28 }, 
    { name: 'John', age: 35 }
];

// const copiedPersons = persons.map(person => ({
//     name: person.name,
//     age: person.age
// }))

const copiedPersons = [...persons]

persons.push({name: 'Anna', age: 29})

// console.log('FIRST ', persons);
// console.log('SECOND ', copiedPersons);


//! Rest
const fullName2 = [
    'Jane', 'Doe', 'Mrs.',
    { month: 3, date: 22, year: 1973 }
];

// const [ fName, lName, ...otherInfo ] = fullName2;
// console.log(fName);
// console.log(lName);
// console.log(otherInfo)

const [fName, lName, , , ...testData] = fullName2;
console.log(testData);
