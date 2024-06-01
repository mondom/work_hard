'use strict'

let orders = new Map()

const order1 = {
	id: 'order001',
	customerName: 'John Doe',
	items: ['Shirt', 'Pants', 'Shoes'],
}

const order2 = {
	id: 'order002',
	customerName: 'Jane Smith',
	items: ['Dress', 'Hat'],
}

orders.set(order1.id, order1)
orders.set(order2.id, order2)

console.log(`Liczba zamówień w systemie: ${orders.size}`)
