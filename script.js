'use strict'

const portfolio = {
	stocks: [
		{ name: 'Company A', shares: 100, price: 10 },
		{ name: 'Company B', shares: 50, price: 20 },
		{ name: 'Company C', shares: 200, price: 5 },
	],
	cash: 1000,
	toString() {
		let fullString = `Portfolio: \n`
		for (const stock of this.stocks) {
			const { name, shares, price } = stock
			fullString += `${name}: ${shares} shares at ${price}$ per share \n`
		}
		fullString += `Cash: ${this.cash}$`
		console.log(fullString)
	},
	valueOf(currency = 'USD') {
		let totalValue = this.cash
		for (const stock of this.stocks) {
			const { shares, price } = stock
			totalValue += shares * price
		}
		switch (currency) {
			case 'USD':
				return totalValue
			case 'EUR':
				return totalValue * 0.85
			case 'GBP':
				return totalValue * 0.72
			default:
				return totalValue
		}
	},
}
portfolio.toString()
console.log(`Total value in USD: ${portfolio.valueOf("USD")}`);
console.log(`Total value in EUR: ${portfolio.valueOf("EUR")}`);
console.log(`Total value in GBP: ${portfolio.valueOf("GBP")}`);