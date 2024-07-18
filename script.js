"use strict"

const promise1 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, "Obietnica 1 spełniona")
})

const promise2 = new Promise((resolve, reject) => {
	setTimeout(reject, 2000, "Błąd serwera")
})

const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 3000, "Obietnica 3 spełniona")
})

Promise.allSettled([promise1, promise2, promise3]).then(results => {
	results.forEach((result, index) => {
		if (result.status === "fulfilled") {
			console.log(
				`Obietnica nr ${index + 1} została spełniona. Jej wartość to: ${result.value}`
			)
		} else if (result.status === "rejected") {
			console.log(
				`Obietnica nr ${
					index + 1
				} nie została spełniona. Powód jej odrzucenia to: ${result.reason}`
			)
		}
	})
})
