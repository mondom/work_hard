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
		}, 2000)
	})
}

function selectDish(menu, indexs) {
	return new Promise((resolve, reject) => {
		const arrOfDishes = []
		for (const index of indexs) {
			if (index >= 0 && index < menu.length) {
				arrOfDishes.push(menu[index])
				resolve(arrOfDishes)
			} else {
				reject("Nieprawidlowy indeks dania")
			}
		}
	})
}

function calculateTotal(selectedDishes) {
	return new Promise(resolve => {
		const total = selectedDishes.reduce((acc, dish) => acc + dish.price, 0)
		resolve(total)
	})
}

function confirmOrder(total) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve("Zamowienie potwierdzone. Laczna kwota: " + total + " zl")
		}, 1500)
	})
}

getMenu()
	.then(menu => {
		const indexs = [0, 2]
		return selectDish(menu, indexs)
	})
	.then(selectedDish => {
		console.log("Wybrane danie:", selectedDish)
		return calculateTotal(selectedDish)
	})
	.then(total => {
		console.log("Laczna cena zamowienia:", total, "zl")
		return confirmOrder(total)
	})
	.then(confirmation => {
		console.log(confirmation)
	})
	.catch(error => {
		console.log("Blad:", error)
	})
