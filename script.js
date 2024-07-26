"use strict"

class Order {
	constructor(productName, quantity, unitPrice, orderDate = new Date()) {
		this.productName = productName
		this.quantity = quantity
		this.unitPrice = unitPrice
		this.orderDate = orderDate
	}

	getTotalPrice(){
		let totalPrice = this.quantity * this.unitPrice
		return totalPrice
	}
}

function* orderGenerator(){
	const products = [
		{ productName: "Produkt A", quantity: 3, unitPrice: 10 },
		{ productName: "Produkt B", quantity: 2, unitPrice: 20 },
		{ productName: "Produkt C", quantity: 1, unitPrice: 15 },
	];

	for(const product of products){
		const order = new Order(product.productName,product.quantity,product.unitPrice)
		yield order
	}
}

const results = orderGenerator()

for(const result of results){
	console.log('Produkt: ' + result.productName);
	console.log('Ilość: ' + result.quantity);
	console.log('Cena jednostkowa: ' + result.unitPrice);
	console.log('Data zamówienia: ' + result.orderDate.toISOString())
	console.log('Cena całkowita: ' + result.getTotalPrice());
	console.log('--------------');
}
