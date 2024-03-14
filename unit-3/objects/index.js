
let marvelHero = {
    fullName: "Peter Parker",
    codeName: "Spider-Man",
    age: 25,
    active: true
}

/* 
!   Object Literal
        When our values are written within our keys. "Hard-Coded"

        * Structure

        keyword objectName = {
            key: value,
        }
*/

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        "season one": [
            {
                episode_title: 'Simpsons Roasting on an Open Fire',
                aired: '1989-12-17'
            },
            {
                episode_title: 'Bart the Genius',
                aired: '1990-01-01'
            },
        ],
        "season two": [/* ... */],
        "season three": [/* ... */],
    },
    currently_running: true
}

// console.log(theSimpsons.genre)
// console.log(theSimpsons['genre']); // Square Bracket notation
// console.log(theSimpsons.seasons["season one"]);

// you can add a key by using dot notation, like so
theSimpsons.characters = [
    'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'
];

// console.log(theSimpsons)

// injects the name Ned into simpsons characters
theSimpsons.characters.push("Ned")

// console.log(theSimpsons.characters)


/*
    - Navigate to season one, episode two, and change the date to reflect a date of 1990-01-14. 
*/

theSimpsons.seasons["season one"][1].aired = "1990-01-14"
console.log(theSimpsons.seasons["season one"][1].aired)


//! --------------------------------------
//! Methods

//* Object.keys()
console.log(Object.keys(theSimpsons));

//* Object.values()
// console.log(Object.values(theSimpsons));

// delete object.key
// delete theSimpsons.currently_running;
// console.log(Object.keys(theSimpsons));


//! Destructuring IMPORTANT TO LEARN
// YOURE GOING TO SEE ALOT OF OBJECTS IN REAL WORK
const { characters, seasons } = theSimpsons;

console.log(characters);
console.log(seasons);

characters.push("Moe");

console.log(theSimpsons);


// good way to reference data, this changes the name from est to established
const { est: established } = theSimpsons;

const simsponCharacters = {
    simpsonHouse: ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'],
    moesTavern: ["Moe","Barney"]
}

const generalLocations = {
    park: 'statue',
    beach: 'dock',
    lake: '3-eyed fish'
}

const locations = {
    ...simsponCharacters,
    dmv: ['Patty', 'Selma'],
    ...generalLocations
}
console.log(locations);