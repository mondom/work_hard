"use strict"

function getUserData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const userData = {
				name: "John",
				age: 30,
			}
			resolve(userData)
		}, 1000)
	})
}

function getOrderData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const orderData = { id: 123, total: 50 }
			resolve(orderData)
		}, 2000)
	})
}
function getProductData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const productData = { name: "Phone", price: 500 }
			resolve(productData)
		}, 1500)
	})
}

Promise.all([getUserData(), getOrderData(), getProductData()]).then(result => {
	const userData = result[0]
	const orderData = result[1]
	const productData = result[2]
	console.log("Dane uzytkownika:", userData)
	console.log("Dane zamowienia:", orderData)
	console.log("Dane produktu:", productData)
}).catch(err => {
	console.error(err);
})
