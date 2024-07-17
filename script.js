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

function selectDish(menu, indexs) {
	return new Promise((resolve, reject) => {
		const arrOfIndex = []
		for (const index of indexs) {
			if (index <= menu.length && index >= 0) {
				arrOfIndex.push(menu[index])
				resolve(arrOfIndex)
			} else {
				reject("Nieprawidlowy indeks dania")
			}
		}
	})
}

function calculateTotal(selectedDishes) {
	return new Promise(resolve => {
		console.log(selectedDishes)
		const total = selectedDishes.reduce((acc, dish) => {
			return acc + dish.price
		}, 0)
		console.log(total)

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
		const arr = [0, 1]
		return selectDish(menu, arr)
	})
	.then(result => {
		return calculateTotal(result)
	})
	.then(tot => {
		console.log("Łaczna cena zamówienia:", tot, "zl")
		return confirmOrder(tot)
	})
	.catch(err => console.error(err))
