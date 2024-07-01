'use strict'

class Stock {
	constructor(symbol, price, quantity) {
		this.symbol = symbol
		this.price = price
		this.quantity = quantity
	}

	static formatPrice(price) {
		return price.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		})
	}
}
