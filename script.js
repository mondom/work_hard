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

	getValue() {
		return this.price * this.quantity
	}
}

class DividendStock extends Stock {
	constructor(symbol, price, quantity, divident) {
		super(symbol, price, quantity)
		this.divident = divident
	}

	static calculateDividendYield(divident, price) {
		return divident / price
	}

	getDividendValue() {
		return this.divident * this.quantity
	}
}

const myStock = new Stock("AAPL", 150.25, 100)

console.log("Wartosc moich akcji:", myStock.getValue());

const myDividendStock = new DividendStock("GOOGL", 1200.75, 50, 2.5)
console.log("Wartosc moich akcji z dywidenda:", myDividendStock.getValue());

console.log("Wartosc dywidendy:", myDividendStock.getDividendValue());