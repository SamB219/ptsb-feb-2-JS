//! CHALLENGE
/*
    - Create a bird class that extends pets.
    - Provide it a new key property called "flies" that will hold a boolean value.
    - Create a method within the parent class called "fly" that checks to see if our object can fly and returns as such:
        If so: "{pet} takes to the skies!"
        If not: "{pet} can only gaze upward..."

    - Create a new bird. (give whatever values to its attributes)
        - hint: make sure it is "true" that it can fly.
    - Within a console.log(), check the fly method of the new bird and another using either the dog or cat just created.

*/

class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    speak() {
        return `${this.name} says, "${this.voice}"`
    }

    fly() {
        if(this.flies === true) {
            return `${this.name} takes to the skies!`
        } else {
            return `${this.name} only gazes upward...`
        }
}
}

class Bird extends Pet {
    constructor(name,color,flies) {
        super(name,color);
        this.flies = flies;
    }
    fly() {
        if(this.flies === true){
            console.log(`${this.name} takes to the sky`);
        }else {
            console.log(`${this.name} can only gaze upward...`);
        }
        }
    }


let bird1 = new Bird("bird1", "black", true)

bird1.fly()