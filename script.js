'use strict'

const orders = [
	{
		klient: 'Jan Kowalski',
		produkty: [
			{ nazwa: 'Telefon', cena: 1500 },
			{ nazwa: 'Klawiatura', cena: 200 },
			{ nazwa: 'Myszka', cena: 50 },
		],
	},
	{
		klient: 'Anna Nowak',
		produkty: [
			{ nazwa: 'Laptop', cena: 2500 },
			{ nazwa: 'Monitor', cena: 1000 },
		],
	},
	{
		klient: 'Tomasz Krakowiak',
		produkty: [
			{ nazwa: 'Karta graficzna', cena: 2100 },
			{ nazwa: 'Procesor', cena: 1500 },
			{ nazwa: 'Pamiec RAM', cena: 800 },
		],
	},
]

const mapOrders = () => {

	
	// orders.map(order => {
	
	// 	const  products = order.produkty
		

	// 	const cost = products.map(product => product.cena)
	// 	console.log(cost)

	// 	const finalCost = cost.reduce(function (accumulator, currentValue) {
	// 		return accumulator + currentValue
	// 	},0)
	// 	console.log(finalCost);
	// })
}

mapOrders()
