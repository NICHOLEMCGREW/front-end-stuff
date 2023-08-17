let stopwatch = {}

stopwatch.currentTime = 12

stopwatch.tellTime = function(time) {
    console.log(`The current time is ${time}.`)
}

stopwatch.tellTime(stopwatch.currentTime)

// car factory

function MakeCar(carMake, carModel, carColor, numOfDoors) {
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.doors = numOfDoors
    this.honk = function() {
        console.log('beepbeeep')
    }
    this.lock = function() {
        console.log(`Locked ${this.doors} doors!`)
    }
}

hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)

teslaRoadster = new MakeCar('Tesla', 'Roadster', 'Red', 2)


function MakeSFCharacter(punch, kick, catchPhrase, specialMove) {
    this.punch = punch
    this.kick = kick
    this.catchPhrase = catchPhrase
    this.specialMove = specialMove
    this.taunt = function() {
        console.log(`You can\'t handle my ${this.specialMove}`)
    }
    this.winning = function() {
        console.log(`Haha! ${this.catchPhrase}`)
    }
    this.dash = function() {
        console.log(`Whoooopp, missed me!`)
    }
}

let ryu = new MakeSFCharacter('high', 'high', 'Get over here', 'HADDDDDDUUUUKKKEEEENNN')
let nichole = new MakeSFCharacter('medium', 'high', 'You can\'t handle my personality', 'tripple tripple kick')