class Employee {
    constructor(name) {
        console.log(`${name} - Employe constructure is here`);
        this.name = name;
    }
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
    constructor(name) {
        super(name);
        this.name = name;
        console.log(`${name} this is a newly written constructor`);

    }
    
    // constructor(...args) { // ---> if there is no constructor in tha child class ,this is create automaticlly
    //     super(...args);
    // }


    requestCoffee(x) {
        console.log(`Employe has requested ${x} coffees`);
    }

    requestLeves(leves) {
        super.requestLeves(4)
        console.log("one extra is grented");

        // console.log(`Employe has requested ${leves + 1} leves (one extra)`);

    }
}

let e = new Programer("Adnan");
e.login();
e.requestLeves();
