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


function getTotalOrderValue() {
	let sum = 0
	orders.forEach(order => {
		sum = order.unitPrice * order.quantity
		console.log('Total Order Value:', sum);
	})
	
}



function displayOrders(){
	orders.forEach(order => {
		console.log(`Order Number: ${order.orderNumber}, Product: ${order.productName}, Quantity: ${order.quantity}, Total Value: ${order.unitPrice * order.quantity}`);
	})
}

export { addOrder, getTotalOrderValue, displayOrders }
