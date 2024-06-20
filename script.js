'use strict'

const person = {
	name: 'John',
	age: 40,
	city: 'New York',
}

const propertyDescriptors = Object.getOwnPropertyDescriptors(person)
console.log(propertyDescriptors);



console.log("Wartosc wlasciwosci 'name':", person.name);
console.log("Wartosc wlasciwosci 'age':", person.age);
console.log("Wartosc wlasciwosci 'city':", person.city)

person.name = 'Mike'

console.log("Wartosc wlasciwosci 'name':", person.name);
console.log("Wartosc wlasciwosci 'age':", person.age);
console.log("Wartosc wlasciwosci 'city':", person.city);

delete person.age

console.log("Wartosc wlasciwosci 'age':", person.age);

console.log(propertyDescriptors);