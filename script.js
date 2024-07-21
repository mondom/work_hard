"use strict"

function fetchUserData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const userData = { name: "John", age: 30 }
			resolve(userData)
		})
	})
}
function fetchOrderData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const orderData = { id: 123, total: 50 }
			if (!Array.isArray(orderData)) {
				resolve(orderData)
			} else {
				reject("Błąd serwera")
			}
		})
	})
}
function fetchProductData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const productData = { name: "Phone", price: 500 }
			resolve(productData)
		})
	})
}

Promise.allSettled([fetchUserData(), fetchOrderData(), fetchProductData()])
	.then(resultsArr => {
		const userDataResult = resultsArr[0]
		const orderDataResult = resultsArr[1]
		const productDataResult = resultsArr[2]

		if (userDataResult.status === "fulfilled") {
			console.log("Dane uzytkownika:", userDataResult.value)
		} else {
			console.log(
				"Nie udalo sie pobrac danych uzytkownika:",
				userDataResult.reason
			)
		}
		if (orderDataResult.status === "fulfilled") {
			console.log("Dane zamówienia:", orderDataResult.value)
		} else {
			console.log(
				"Nie udalo sie pobrac danych zamówienia:",
				orderDataResult.reason
			)
		}
		if (productDataResult.status === "fulfilled") {
			console.log("Dane produktu:", productDataResult.value)
		} else {
			console.log(
				"Nie udalo sie pobrac danych produktu:",
				productDataResult.reason
			)
		}
	})
	.catch(err => {
		console.log(`Wystąpił nieoczekiwany błąd: ${err}`)
	})
