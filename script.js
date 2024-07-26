"use strict"

// function sleep(ms) {
// 	return new Promise(resolve => setTimeout(resolve, ms))
// }

// async function* zadania() {
// 	const listaZadan = [
// 		{
// 			id: 1,
// 			opis: "Przygotowanie raportu",
// 			status: "W trakcie",
// 		},
// 		{
// 			id: 2,
// 			opis: "Sprawdzenie wiadomosci",
// 			status: "Zakonczone",
// 		},
// 		{
// 			id: 3,
// 			opis: "Spotkanie z klientem",
// 			status: "W trakcie",
// 		},
// 	]

// 	for (const zadanie of listaZadan) {
// 		await sleep(1000)
// console.log('.....', zadanie);
// 		yield zadanie
// 	}
// }

// const generatorZadan = zadania();

// (async () => {
// 	for await (const zadanie of generatorZadan) {
// 		console.log("ID:", zadanie.id)
// 		console.log("Opis:", zadanie.opis)
// 		console.log("Status:", zadanie.status)
// 		console.log("--------------------")
// 	}
// })()

function wait(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms)
	})
}

async function* zadania() {
	const listaZadan = [
		{
			id: 1,
			opis: "Przygotowanie raportu",
			status: "W trakcie",
		},
		{
			id: 2,
			opis: "Sprawdzenie wiadomosci",
			status: "Zakonczone",
		},
		{
			id: 3,
			opis: "Spotkanie z klientem",
			status: "W trakcie",
		},
	]

	for (const zadanie of listaZadan) {
		await wait(1000)
		yield zadanie
	}
}

const generatorZadan = zadania()

;(async () => {
	for await (const zadanie of generatorZadan) {
		console.log("ID: ", zadanie.id)
		console.log("Opis: ", zadanie.opis)
		console.log("Status: ", zadanie.status)
		console.log("------------")
	}
})()
