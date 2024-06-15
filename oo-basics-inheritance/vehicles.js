class Vehicle {
  constructor(year) {
    this.year = year;
  }

  startEngine() {
    return 'Ready to go!';
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
  }

  startEngine(speed) {
    return `Ready to go! Drive ${speed}, please!`;
  }
}

class Car extends Vehicle {
  constructor(year) {
    super(year);
  }
}

const towMixin = {
  tow() {
    return 'I can tow a trailer!';
  }
};

Object.assign(Truck.prototype, towMixin);

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);