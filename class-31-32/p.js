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