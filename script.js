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

