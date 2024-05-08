'use strict'

const products = [
	{ name: 'koszula', price: 49.99 },
	{ name: 'spodnie', price: 79.99 },
	{ name: 'buty', price: 129.99 },
	{ name: 'kurtka', price: 149.99 },
]

const filterProducts = filterFunction => {
	const filteredProducts = products.filter(filterFunction)
	return filteredProducts
}

const filteredProducts = filterProducts(product => product.price > 100)
console.log(filteredProducts[0].name + ' : ' + filteredProducts[0].price);
// console.log(filteredProducts[0].name + ': ' + filteredProducts[0].price)
// console.log(filteredProducts[1].name + ': ' + filteredProducts[1].price)
