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

console.log('Zamówienia w systemie:')

for (const [orderId, order] of orders.entries()) {
	console.log(`[ID zamówienia: ${orderId}]`)
	console.log(`Klient: ${order.customerName}`)
	console.log(`Przedmioty: ${order.items.join(', ')}`)
}

const orderIdToCheck = 'order002'

if (orders.has(orderIdToCheck)) {
	console.log(`Zamowienie o ID ${orderIdToCheck} istnieje w systemie.`)
} else {
	console.log(`Zamowienie o ID ${orderIdToCheck} nie istnieje w systemie.`);
}


const orderIdToGet = 'order001'

const orderToGet = orders.get(orderIdToGet)

if(orderToGet){
	console.log(`Informacje o zamówieniu:\nID zamówienia: ${orderToGet.id}\nKlient: ${orderToGet.customerName}\nPrzedmioty: ${orderToGet.items.join(', ')}`);
}


