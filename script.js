'use strict'

const order = {
	products: ['Koszula', 'Spodnie', 'Buty'],
	quantities: [2, 1, 1],
	unitPrices: [50, 80, 120],
}

function calculateTotal() {
	const result = this.unitPrices.reduce((acc, curr, index) => acc + curr * this.quantities[index], 0)
	console.log(result);
}

calculateTotal.bind(order)()

// function displayOrderDetails() {
// 	console.log('Szczegoly zamowienia:')
// 	this.products.forEach((product, index) => {
// 		console.log(`${product} - ilosc: ${this.quantities[index]}, cena jednostkowa: ${this.unitPrices[index]}`)
// 	})
// 	const total = calculateTotal.call(this)
// 	console.log('laczna wartosc zamowienia:', total)
// }

// const displayOrderDetailsForOrder = displayOrderDetails.bind(order)

// displayOrderDetailsForOrder()
