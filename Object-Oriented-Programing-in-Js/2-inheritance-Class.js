// Inheritance:

// Is example mein hum inheritance ka concept use karenge, jisme ek base class (parent class) se properties aur methods derived class (child class) inherit karegi. Base class mein common functionality hogi jo multiple derived classes use kar sakti hain, aur derived class apni specific functionality add karegi ya existing functionality ko override karegi.

class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    start() {
      console.log(this.make, this.model);
    }
  }

  // use extends Keyword inherit Vehicle class
  class Car extends Vehicle {
    constructor(make, model, year) {
      super(make, model);
      this.year = year;
    }
    start() {
      super.start();
      console.log(this.year);
    }
  }
  
  const data1 = new Car("tata", "nixon", 2020);
  data1.start();

  const data2 = new Vehicle("maruti","suzuky",2021);
  data2.start();
  