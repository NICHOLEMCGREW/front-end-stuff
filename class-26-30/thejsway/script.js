class Character2 {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
    }
    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          const bonusXP = 10;
          console.log(
            `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`
          );
          this.xp += bonusXP;
        }
      } else {
        console.log(`${this.name} can’t attack (they've been eliminated)`);
      }
    }
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength and ${this.xp} XP points`;
    }
  }

  const aurora2 = new Character2("Aurora", 150, 25);
  const glacius2 = new Character2("Glacius2", 130, 30);
  
  console.log("Welcome to the adventure! Here are our heroes:");
  console.log(aurora2.describe());
  console.log(glacius2.describe());
  
  const monster2 = new Character2("Spike", 40, 20);
  console.log("A wild monster2 has appeared: it's named " + monster2.name);
  
  monster2.attack(aurora2);
  monster2.attack(glacius2);
  aurora2.attack(monster2);
  glacius2.attack(monster2);
  
  console.log(aurora2.describe());
  console.log(glacius2.describe());


// TODO: define the Dog class here

// Dogs

class Dog {
    constructor(name, species, size) {
        this.name = name;
        this.species = species;
        this.size = size;
    }
    // Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!"
    bark() {
        if (this.size > 60) {
            return "Grrr! Grrr!"
        } else {
            return "Woof! Woof!"
        }
    }
}


const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

// Character inventory

// Improve the example RPG to add character inventory management according to the following rules:

// A character's inventory contains a number of gold and a number of keys.

// Each character begins with 10 gold and 1 key.

// The character description must show the inventory state.

// When a character slays another character, the victim's inventory goes to its vanquisher.

class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
      this.gold = 10;
      this.key = 1
    }
    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          const bonusXP = 10;
          const bonusGold = this.gold
          const bonusKeys = this.key
          console.log(
            `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${this.gold} gold and ${this.key} key(s)`
          );
          this.xp += bonusXP;
          this.gold += bonusGold
          this.key += bonusKeys
        }
      } else {
        console.log(`${this.name} can’t attack (they've been eliminated)`);
      }
    }
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength and ${this.xp} XP points, ${this.gold} and ${this.key} keys(s)`;
    }
  }

  const aurora = new Character("Aurora", 150, 25);
  const glacius = new Character("Glacius", 130, 30);
  
  console.log("Welcome to the adventure! Here are our heroes:");
  console.log(aurora.describe());
  console.log(glacius.describe());
  
  const monster = new Character("Spike", 40, 20);
  console.log("A wild monster has appeared: it's named " + monster.name);
  
  monster.attack(aurora);
  monster.attack(glacius);
  aurora.attack(monster);
  glacius.attack(monster);
  
  console.log(aurora.describe());
  console.log(glacius.describe());


//   Account list

class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = 0;
    }
    credit(amount) {
        this.balance += amount;
        // console.log(`Deposited: $${amount}`);
      }
    describe() {
        return `owner: ${this.name}, balance: ${this.balance}`
    }
}

const sean = new Account("Sean");
const brad = new Account('Brad')
const georges = new Account('Georges')

sean.credit(1000);
brad.credit(1000);
georges.credit(1000);
sean.credit(5000)

console.log(sean.describe());
console.log(brad.describe());
console.log(georges.describe());
