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
		const discountAmount = discountPercentage * this.price
		const discountedPrice = this.price - discountAmount
		return discountedPrice
	}
}

const product = new Product()

