'use strict'

class Vehicle {
	constructor(brand, year, numberOfWheels) {
		this.brand = brand
		this.year = year
		this.numberOfWheels = numberOfWheels
	}

	honk() {
		console.log('Dzwiek klaksonu: Beep beep!')
	}
	getAge() {
		const currentDate = new Date()
		const currentYear = currentDate.getFullYear()
		return currentYear - this.year
	
	}
}

class Car extends Vehicle {
	constructor(brand, year, numberOfWheels, engineCapacity) {
		super(brand, year, numberOfWheels)
		this.engineCapacity = engineCapacity
	}
	startEngine() {
		console.log('Silnik uruchomiony!')
	}
}

class Bicycle extends Vehicle {
	constructor(brand, year, numberOfWheels, gearCount) {
		super(brand, year, numberOfWheels)
		this.gearCount = gearCount
	}
	ringBell() {
		console.log('Ding ding!')
	}
}

const vehicle = new Vehicle('Fiat', 2005, 4)
vehicle.honk()
console.log('Wiek pojazdu: ' + vehicle.getAge())


const car = new Car("Ford", 2018, 4, "2.0L")
car.startEngine()
console.log('Wiek pojazdu: ' + car.getAge())

const bicycle = new Bicycle("Trek", 2020, 2, 7);
bicycle.ringBell()
console.log(`Wiek pojazdu ${bicycle.getAge()}`);

console.log("Czy car jest instancja Vehicle?", car instanceof Vehicle);

console.log("Czy bicycle jest instancja Vehicle?", bicycle instanceof Vehicle);