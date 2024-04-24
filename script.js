'use strict'

function test() {
	let price = 3200
	let isRegularCustomer = true
	let numberOfPurchases = 3
	numberOfPurchases = numberOfPurchases ?? 0
	
	let discount = 10 
	discount = discount ?? 0
	
	let totalPrice

	if (isRegularCustomer && numberOfPurchases === 3) {
		totalPrice = price - (price * discount / 100)
	}

	console.log(`Cena roweru: ${totalPrice} pln`)
}

test()
