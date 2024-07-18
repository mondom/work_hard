"use strict"

function downloadFile(URL) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const fileContent = URL
			const success = false

			if (success === true) {
				resolve(fileContent)
			} else if (success === false) {
				reject("Błąd podczas pobierania pliku")
			}
		}, 2000)
	}).finally(() => console.log("Pobieranie zakończone"))
}
const URL =
	"https://cdn.pixabay.com/photo/2023/08/19/13/42/flowers-8200510_1280.jpg"

downloadFile(URL)
	.then(content => {
		console.log("Zawartosc pliku:", content)
	})
	.catch(error => {
		console.log("Błąd:", error)
	})
