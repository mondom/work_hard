"use strict"

function delay(ms) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve()
		}, ms)
	})
}

const tasks = [
	"Przygotuj sniadanie",
	"Umyj naczynia",
	"Posprzataj pokoj",
	"Obejrzyj ulubiony film",
	"Przeczytaj ksiazke",
]

async function processTasks() {
	for (const task of tasks) {
        await delay(1000)
		console.log(`Rozpoczynam zadanie: ${task}`)
		await delay(2000)
		console.log(`Zadanie zakonczone: ${task}`)
	}
}

processTasks()

