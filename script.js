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

const countOrders = () => {
	const ordersValue = orders.map(order => {
		const value = order.produkty.reduce((accum, price) => {
			return accum + price.cena
		},0)
		return{
			klient: order.klient,
			wartosc: value
		}
	})
	
	ordersValue.forEach(order => {
		console.log(`[Klient]: ${order.klient}, [Wartość zamówienia]: ${order.wartosc}`);
	})
	
}

countOrders()
