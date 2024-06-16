'use strict'

const order = {
	products: ['Koszula', 'Spodnie', 'Buty'],
	quantities: [2, 1, 1],
	unitPrices: [50, 80, 120],
}

function calculateTotal() {
	const result = this.unitPrices.reduce((acc, curr, index) => {
		return acc + curr * this.quantities[index]
	}, 0)

	return result
}

const totalValue = calculateTotal.bind(order)()

function displayOrderDetails() {
	console.log('Szczegóły zamówienia:');
	this.products.forEach((product, index) => {
		console.log(product + ' - ilość: ' +this.quantities[index] + ' cena jednostkowa: ' + this.unitPrices[index] + 'zł');
	});
	
	console.log('laczna wartosc zamowienia: '+ totalValue + 'zł'
	)
}

displayOrderDetails.bind(order)()


