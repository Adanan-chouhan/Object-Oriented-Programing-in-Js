// Method overriding => 

// JavaScript mein ek concept hai jisme child class apne parent class ke method ko overwrite karke apna custom implementation deti hai. Matlab, jab child class ke object se method call hoti hai, to parent class ka method chalne ke bajaye child class ka naya method chal jata hai.

// Parent Class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Child Class
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let myAnimal = new Animal("Generic Animal");
myAnimal.speak(); // Output: "Generic Animal makes a sound."

let myDog = new Dog("Buddy");
myDog.speak(); // Output: "Buddy barks."


// Example 2 =>
class Employee {
    login() {
        console.log(`Employe has logged in`);
    }

    logout() {
        console.log(`Employe has logged out`);
    }

    requestLeves(leves) {
        console.log(`Employe has requested ${leves} leves - Auto approved`);
    }
}

class Programer extends Employee {
    requestCoffee(x) {
        console.log(`Employe has requested ${x} coffees`);
    }

    requestLeves(leves) {
        super.requestLeves(4)
        console.log("one extra is grented");

        // console.log(`Employe has requested ${leves + 1} leves (one extra)`);

    }
}

let e = new Programer;
e.login();
e.requestLeves();