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
		for(const stock of this.stocks){
			const { name, shares, price } = stock
			fullString += `${name}: ${shares} shares at ${price}$ per share \n`
		}
		console.log(fullString);
	},
}
portfolio.toString()