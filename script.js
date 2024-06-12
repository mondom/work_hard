'use strict'

const products = ['Kawa', 'Herbata', 'Sok pomaranczowy']

function addProduct(...newproducts) {
	products.push(...newproducts)
	products.forEach(el => {
		console.log(el)
	})
}

addProduct('ciasto', 'mleko', 'jajka')

function removeProduct(...indexy) {
	indexy.forEach(index => {
		products.splice(index, 1)
	})
	console.log(products)
}

removeProduct(3, 4)
