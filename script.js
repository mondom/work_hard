'use strict'

const products = [
	{ name: 'koszula', price: 49.99 },
	{ name: 'spodnie', price: 79.99 },
	{ name: 'buty', price: 129.99 },
]

const filterProducts = filterFunction => {
	const filteredProducts = products.filter(filterFunction)
	 console.log(filteredProducts);
}

const filterFunction = () => {
	products.price < 100 
}
filterProducts(filterFunction)