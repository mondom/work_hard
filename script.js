'use strict'

const products = [
	{ name: 'koszula', price: 49.99 },
	{ name: 'spodnie', price: 79.99 },
	{ name: 'buty', price: 129.99 },
	{ name: "Kurtka", price: 149.99 }
]

const filterProducts = () => {
	const result = products.filter(product => {
		return product.price < 100;
	})
	console.log(result);	
}

filterProducts()
