'use strict'

const products = [
	{ name: 'koszula', price: 49.99 },
	{ name: 'spodnie', price: 79.99 },
	{ name: 'buty', price: 129.99 },
	{ name: "Kurtka", price: 149.99 }
]

const filterProducts = filterFunction => {
	const filteredProducts = products.filter(filterFunction)
	 return filteredProducts
}

const result = filterProducts((product) => {
	product.price < 100
})
console.log(result[0].name + ": " + result[0].price);
console.log(result[1].name + ": " + result[1].price);
console.log(result);

// const filterFunction = () => {
// 	const test = products.price < 100 
// 	return test
// }
// filterProducts(filterFunction)
// filterFunction()