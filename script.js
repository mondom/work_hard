'use strict'

function Employee(name, age, position) {
	this.name = name
	this.age = age
	this.position = position
}

Employee.prototype.introduce = function () {
	console.log(`Czesc, jestem ${this.name}, mam ${this.age} lat i pracuje jako ${this.position}.`)
}

const employee1 = new Employee('Jan Kowalski', 30, 'Programista')
employee1.introduce()

const employee2 = new Employee('Anna Nowak', 25, 'Analityk')
employee2.introduce()

function Manager(name, age, position, department) {
	Employee.call(this, name, age, position, this.manage)
	this.department = department
}
Manager.prototype = Object.create(Employee.prototype)
Manager.prototype.constructor = Manager

Manager.prototype.manage = function () {
	console.log(`Jestem ${this.name}, pracuje jako ${this.position} i zarzadzam dzialem ${this.department}.`)
}
const manager1 = new Manager('Kamil Wisniewski', 35, 'Kierownik', 'IT')
manager1.introduce()
manager1.manage()
