'use strict'

const uczestnicy = ['Michal', 'Tomasz', 'Katarzyna', 'Marcin', 'Anna']

console.log(`Krok pierwszy - wyświetlenie tablicy:`)
uczestnicy.forEach((uczestnik, index) => {
	console.log(`[${index + 1}] ${uczestnik}`)
})
