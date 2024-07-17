"use strict"

function getMenu() {
	return new Promise(resolve => {
		setTimeout(() => {
			const menu = [
				{ name: "Pizza Margherita", price: 20 },
				{ name: "Spaghetti Bolognese", price: 15 },
				{ name: "Caesar Salad", price: 10 },
			]
			resolve(menu)
		}, 1000)
	})
}

function selectDish(menu, index) {
	return new Promise((resolve, reject) => {
		if (index <= menu.length && index >= 0) {
			resolve(menu[index])
		} else {
			reject("Nieprawidlowy indeks dania")
		}
	})
}

function calculateTotal(selectedDishes) {
	return new Promise(resolve => {
		const total = selectedDishes.reduce((acc, dish) => {
			return acc + dish.price
		}, 0)

		resolve(total)
	})
}

function confirmOrder(total) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(
				console.log("Zamowienie potwierdzone. Laczna kwota: " + total + " zl")
			)
		}, 1000)
	})
}

getMenu()
	.then(menu => {
		return selectDish(menu, 0)
	})
	.then(result => {
		return calculateTotal([result])
	})
	.then(tot => {
		console.log("Laczna cena zamowienia:", tot, "zl")
		return confirmOrder(tot)
	})
