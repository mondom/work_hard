'use strict'

let products = [
	{ name: 'Product 1', price: 10.99, quantity: 50 },
	{ name: 'Product 2', price: 5.99, quantity: 20 },
	{ name: 'Product 3', price: 15.99, quantity: 10 }
]

products.forEach(product => {
	console.log(`Product name: ${product.name}`);
	console.log(`Product price: ${product.price}`);
	console.log(`Product quantity: ${product.quantity}`);
})