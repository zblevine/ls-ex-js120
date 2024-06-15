class Cat {
  constructor(name) {
    this.name = name;
  }

  static genericGreeting() {
    console.log('I\'m a cat!');
  }

  rename(newName) {
    this.name = newName;
  }

  personalGreeting() {
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat("Sophie");
console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe
Cat.genericGreeting();
kitty.personalGreeting();