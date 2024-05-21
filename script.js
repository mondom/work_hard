'use strict'

const book = {
	title: 'JavaScript Cookbook',
	author: 'John Doe',
	year: 2022,
	[Symbol.toPrimitive](hint) {
		if (hint === 'string') {
			return this.title
		} else if (hint === 'number') {
			return this.year
		} else {
			return this.author
		}
	},
}

book[Symbol.toPrimitive]()
console.log(String(book))
console.log(Number(book))
