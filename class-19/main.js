const pen = {
    type: 'ballpoint',
    color: 'blue',
    brand: 'Bic'
};
pen.color = 'red';
pen.price = '$2.5';

// console.log(pen.type)
// console.log(pen.price)
// console.log(pen.color)


const aurora = {
    name: 'Aurora',
    health: 150,
    strength: 25
};

// console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);

aurora.health -= 20;
aurora.strength += 10;

// console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);

function describe(character) {
    return `${character.name} has ${character.health} health points and ${character.strength} as strength`;
}

// console.log(describe(aurora))

const aurora2 = {
    name: "Aurora",
    health: 150,
    strength: 25,
  
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points and ${this
        .strength} as strength`;
    }
  };
  
//   console.log(aurora2.describe());

// Adding character experience

const aurora3 = {
    name: 'Aurora',
    health: 150,
    strength: 25,

    describe() {
        return `${this.name} has ${this.health} health points and ${this
          .strength} as strength and ${this.xp} XP points.`;
      }
};

aurora3.xp = 0;

aurora3.health -= 20;
aurora.strength += 10;
aurora3.xp += 15;
// console.log(aurora3.describe());

// Modeling a dog

const dog = {
    name: 'Fang',
    species: 'boarhound',
    size: 75,

    bark() {
        return 'Grrr! Grrr!'
    }
};

// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// Modeling a circle
// const r = Number(prompt('Enter the circle radious'));
const circle = {
    circumference()  {
        return 2 * Math.PI * r; 
    },
    area() {
        return Math.PI * r^2;
    }
}

// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);

// Modeling a bank account
const account = {
    name: 'Alex',
    balance: 0,
    credit(amount) {
       this.balance += amount;
    },
    describe() {
        return `Owner: ${this.name}, balance ${this.balance}`;
    }
};

// console.log(account.describe());
account.credit(250);
account.credit(-80);
// console.log(account.describe());

// Manipulating arrays in JavaScript

const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
// console.log(movies[2])


for (let i = 0; i < movies.length; i++) {
    // console.log(movies[i]);
}

movies.forEach(movie => {
    // console.log(movie);
})

for (const movie of movies) {
    // console.log(movie)
}

movies.push('Ghostbusters');
// console.log(movies[3])

movies.unshift('Pacific Rim');
// console.log(movies[0])

movies.pop();
// console.log(movies.length);
// console.log(movies[0])
// console.log(movies)

// Coding time!
// Musketeers

const musketeers = ["Athos", "Porthos", "Aramis"];

for (let i = 0; i <= musketeers.length; i++) {
    // console.log(musketeers[i])
}

musketeers.push("D'Artagnan");

musketeers.forEach(musketeer => {
    // console.log(musketeer)
})

musketeers.splice(2);

for (const musketeer of musketeers) {
    // console.log(musketeer)
}

// Sum of values

const values = [3, 11, 7, 2, 9, 10];

const getSum = values.reduce((acc, cur) => acc + cur, 0)
// let sum = values.reduce(getSum);
// console.log(getSum);

// Array maximum

const values2 = [3, 11, 7, 2, 9, 10];

const max = values2.reduce((acc, cur) => Math.max(acc, cur), - Infinity)

// console.log(max);

// List of words
let list = [];

while(true) {
    let input = prompt('type a word').toLowerCase();
    if (input === "stop" || input === null) {
        break;
}

    list.push(input);
    console.log(input)
}
