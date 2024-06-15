/* eslint-disable id-length */
class Pet {
  constructor(species, name) {
    this.name = name;
    this.species = species;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  getPets() {
    return this.pets;
  }

  numberOfPets() {
    return this.pets.length;
  }

  isNewOwner() {
    return this.numberOfPets() === 0;
  }
}

class Shelter {
  constructor() {
    this.owners = [];
  }

  adopt(owner, pet) {
    if (owner.isNewOwner()) {
      this.owners.push(owner);
    }
    owner.addPet(pet);
  }

  printAdoptions() {
    for (let i = 0; i < this.owners.length; i++) {
      let owner = this.owners[i];
      console.log(`${owner.name} has adopted the following pets:`);
      let pets = owner.getPets();
      for (let j = 0; j < pets.length; j++) {
        let pet = pets[j];
        console.log(`a ${pet.species} named ${pet.name}`);
      }
      console.log('');
    }
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);