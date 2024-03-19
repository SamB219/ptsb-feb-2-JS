/* 
!   Object Oriented Programming
    - Encapsulation
    - Inheritance
    - Abstraction
    - Polymorphism
*/

//* Encapsulation
class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    // speak() {
    //     return `${this.name} says, "Woof!"`;
    // }

    speak() {
        return `${this.name} says, "${this.voice}"`
    }
}

// let buttons = new Pet('Buttons', 'brown');
// console.log(buttons.speak());

//* Inheritance
class Dog extends Pet {
    constructor(name, color, voice) {
        super(name,color);
        this.voice = voice;
    }

    // speak() {
    //     return `${this.name} says, "${this.voice}!"`;
    // } //* Only for Dog class
}

let buttons = new Dog('Buttons', 'brown', 'ruff');
console.log(buttons.speak());

//* extends: denotes for us that our class "Dog" is a child of "Pet"
//* super: brings in properties of the parent class.

class Cat extends Pet {
    constructor(name, color, voice){
        super(name, color);
        this.voice = voice;
    }
}

let moss = new Cat('Moss', 'black', 'mew');
// console.log(moss);
// console.log(moss.speak());

//* Abstraction
class Tab {
    constructor(sub, tax) {
        this.subTotal = sub;
        this.tax = tax;
        this.tip;
    }

    tipAmount(x) {
        let total = this.subTotal + this.tax;

        this.tip = total * x;
        let final = total + this.tip;
        return final.toFixed(2);
    }

}
let saleTax = .075;
let tipPercent = .2;

let dinnerBill = new Tab(42.83, saleTax);
console.log(dinnerBill) 

function calcTip(bill) {
    return bill.tipAmount(tipPercent);
}
console.log(`Final Cost: $${calcTip(dinnerBill)}`)

//* Polymorphism

class A {
    show() {
        console.log('from A');
    }
}

class B extends A {}
let b = new B();
b.show(); 