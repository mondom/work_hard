"use strict"

// function fetchUserData() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const userData = { name: "John", age: 30 }
// 			resolve(userData)
// 		}, 1000)
// 	})
// }
// function fetchOrderData() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const orderData = { id: 123, total: 50 }
// 			resolve(orderData)
// 		}, 1500)
// 	})
// }
// function fetchProductData() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const productData = { name: "Phone", price: 500 }
// 			resolve(productData)
// 		}, 1500)
// 	})
// }

// Promise.allSettled([
// 	fetchUserData(),
// 	fetchOrderData(),
// 	fetchProductData(),
// ]).then(results => {
// 	results.forEach((result, index) => {
// 		if (result.status === "fulfilled") {
// 			console.log(`Wynik dla obietnicy nr ${index + 1} jest poprawny:`)
// 			Object.entries(result.value).forEach(([key, value]) => {
// 				console.log(`${key}: ${value}`)
// 			})
// 		} else if (result.status === "rejected") {
// 			console.log(`Wynik dla obietnicy nr ${index + 1} jest nieprawidłowy: ${result.reason}`)
// 		}
// 	})
// })

// const user = {
// 	name: 'John',
// 	age: 30,
// 	city: 'New York'
//   };
  
//   const entries = Object.entries(user);
//   console.log(entries);
  
const user = {
	name: 'John',
	age: 30,
	city: 'New York'
  };
  
const {name,city} = user

console.log(`Wartość name to ${name}, a wartość city to ${city}`);