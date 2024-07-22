"use strict"

function getDeliveryTimeFromSupplierA() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(2000)
		}, 2000)
	})
}
function getDeliveryTimeFromSupplierB() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(1500)
		}, 1500)
	})
}
function raceBetweenSuppliers() {
	Promise.race([getDeliveryTimeFromSupplierA(), getDeliveryTimeFromSupplierB()])
		.then(result => {
			if (result === 2000) {
				console.log('"Zwyciezca jest dostawca A!"')
			} else if (result === 1500) {
				console.log("Zwyciezca jest dostawca B!")
			}
		})
		.catch(err => {
			console.log(err)
		})
}
raceBetweenSuppliers()
