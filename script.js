'use strict'

const product = {
	price: 250,
}

function calculateDiscount(percent) {
	
	return this.price * percent
	// console.log(`Value of discount: ${result}`);
}

const calculateProductDiscount = calculateDiscount.bind(product)
const discount = calculateProductDiscount(0.2)
console.log(discount);
