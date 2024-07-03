'use strict'

class Product {
	constructor(name, price) {
		this.name = name
		this.price = price
	}

	calculateDiscount(discountPercentage) {
		if (discountPercentage < 0 || discountPercentage > 100) {
			throw new Error('Niewłaściwy procent zniżki')
		}
		const discountAmount = (discountPercentage / 100) * this.price
		const discountedPrice = this.price - discountAmount
		console.log(discountedPrice)
		return discountedPrice
	}
}

const product = new Product('Telewizor', 2000)

try {
	const test = product.calculateDiscount(20)
	console.log(`Przed znizka: ${product.price}`)
	console.log(`Po znizce (20%): ${test}`)
} catch (error) {
	console.error(error.message)
}
