"use strict"

function downloadFile(URL) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const fileContent = "Tekstowa zawartość pliku"
			const success = true

			if (success === true) {
				resolve(fileContent)
			} else if (success === false) {
				console.error("Błąd podczas pobierania pliku")
				reject("Błąd podczas wywołania danych")
			}
		}, 2000)
	})
}
