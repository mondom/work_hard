'use strict'

class Product {
	constructor(name, price, quantity) {
		this.name = name
		this.price = price
		this.quantity = quantity
	}

	buy(amount) {
		if (amount > this.quantity) {
			throw new Error('Nie ma wystarczajacej ilosci produktow na stanie.')
		} else if (amount <= this.quantity) {
			this.quantity = this.quantity - amount
			console.log('Zakup został sfinalizowany');
		}
	}
}

try {
	const product = new Product('Telefon', 999, 10)
	product.buy(10)
} catch (error) {
	console.error(error.message)
} finally {
	console.log('Obsluga bledu zostala zakonczona.')
}
