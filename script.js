'use strict'
const input = document.querySelector('input')
const btn = document.querySelector('.btn')

const products = [
	{ name: 'Koszula', price: 49.99 },
	{ name: 'Spodnie', price: 79.99 },
	{ name: 'Buty', price: 129.99 },
	{ name: 'Kurtka', price: 149.99 },
]

const filterProducts = filterFunction => {
	const productsFilter = products.filter(filterFunction)
	return productsFilter
}

const filteredProducts = filterProducts(product => product.price < 100)

console.log(filteredProducts)
