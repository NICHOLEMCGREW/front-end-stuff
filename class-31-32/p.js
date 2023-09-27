class Animal{
    constructor(name) {
        this._name = name
    }
    get name() {
        return this._name
    }
    speak() {
        console.log(`${this._name} makes a sound`)
    }
}

class DomesticAnimal extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed
    }
    get breed() {
        return this._breed
    }
    speak() {
        super.speak()
    }
}

class Dog extends DomesticAnimal {
    constructor(name, breed, size) {
        super(name)
        this._breed = breed
        this.size = size
    }
    speak() {
        super.speak()
    }
}

let simba = new Dog('Simba', 'Shepard', 'Large')



class Contractor {
    constructor(name, role) {
        this._name = name
        this._role = role
    }
    get name() {
        return this._name
    }
    get role() {
        return this._role
    }
    sayHello() {
        console.log(`Hello, my name is ${this._name} and I'm on the ${this._role} team!`)
    }
    sayBye() {
        console.log(`It was a pleasure working with you!`)
    }
}

class Front extends Contractor {
    constructor(name, role, tech) {
        super(name, role)
        this._tech = tech
    }
    get tech() {
        return this._tech
    }
    sayHello() {
        console.log(`Hello, I am on the ${this.role} team at #100Devs and I use ${this._tech}`)
    }
}

class Back extends Contractor {
    constructor(name, role, tech) {
        super(name, role)
        this._tech = tech
    }
    get tech() {
        return this._tech
    }
    sayHello() {
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}

let machi = new Contractor('The Machine', 'Front-end')
let simbas = new Back('Simba', 'Back-end Developer', 'React')

let agencyList = [machi, simba]

for (person of agencyList) {
    person.sayHello()
}