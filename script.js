'use strict'

const myArray = ['jablko', 'banan', 'cytryna', 'pomarancza']

const accessArrayElements = index => {
	return myArray.at(index)
}

console.log(accessArrayElements(0))

console.log(accessArrayElements(2))
console.log(accessArrayElements(3))
