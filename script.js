"use strict"

function sleep(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms)
	})
}

async function* zamowieniaGenerator() {
	const zamowienia = [
		{ id: 1, status: "Przyjete" },
		{ id: 2, status: "Przygotowywane" },
		{ id: 3, status: "Gotowe" },
	]

	for (const zamowienie of zamowienia) {
		await sleep(1500)
		yield zamowienie
	}
}

const generatorZamowien = zamowieniaGenerator()
;(async () => {
	for await (const zamowienie of generatorZamowien) {
		console.log("ID zamowienia:", zamowienie.id)
		console.log("Status zamowienia:", zamowienie.status)
		console.log("--------------------")
	}
})()
