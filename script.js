'use strict'

const products = ['Kawa', 'Herbata', 'Sok pomaranczowy']

function addProduct(...newproducts) {
	products.push(...newproducts)
  products.forEach(el => {
    console.log(el);
  })
}

const result = addProduct('ciasto', 'mleko', 'jajka')

console.log(result)

function removeProduct(...productsToRemove){

}


