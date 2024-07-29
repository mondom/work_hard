const orders = []

function addOrder(orderNumber, productName, unitPrice, quantity) {
	const order = {
		orderNumber,
		productName,
		unitPrice,
		quantity,
	}
	orders.push(order)
}
addOrder(1, "ponczo", 499, 2)

function getTotalOrderValue() {
	let sum = 0
	orders.forEach(order => {
		sum = order.unitPrice * order.quantity
	})
	console.log(sum)
}

getTotalOrderValue()

export { addOrder, getTotalOrderValue }
