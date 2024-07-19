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
			const orderData = { id: 123, total: 50 };
			if(!Array.isArray(orderData)){
        resolve(orderData)
      } else{
        reject('Błąd serwera')
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

Promise.allSettled([fetchUserData(), fetchOrderData(), fetchProductData()]).then(resultsArr => {
  resultsArr.forEach(result => {
    if(result.status === 'fulfilled'){
      console.log(result.value);
    } else if(result.status === 'rejected'){
      console.log(`Nie udało się pobrać danych użytkownika: ${result.reason}`);
    }
  })
 
}).catch(err => {
  console.log(`Wystąpił błąd: ${err}`);
})
