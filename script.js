'use strict'

let cost = '19.50'

const numCost = Number(cost)
console.log(numCost)

const bool = Boolean(numCost > 20)
console.log(bool)

if (bool) {
	console.log(`zamówienie zostało przyjęte`)
} else {
	console.log(`koszt musi przekroczyć 20zł`)
}
