"use strict"

function* kasyno() {
	let sumaPunktow = 0

	while (true) {
		const wynikRzutu = Math.floor(Math.random() * 6) + 1
		sumaPunktow += wynikRzutu
		if (sumaPunktow > 20) {
			throw new Error("Przekroczono limit punktów!")
		}
		yield sumaPunktow
	}
}

const generator = kasyno()

try {
	while (true) {
		const wynik = generator.next().value
		console.log("Suma punktow:", wynik)
	}
} catch (err){
	console.error(err)
}
