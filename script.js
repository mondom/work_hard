'use strict'

const participants = ['Michal', 'Tomasz', 'Monika', 'Marcin', 'Anna']

console.log(`Krok pierwszy - wyświetlenie tablicy:`)
participants.forEach((participant, index) => {
	console.log(`[${index + 1}] ${participant}`)
})

const participantsSorted = participants.sort()
console.log('Krok 2: Sortowanie alfabetyczne')
participantsSorted.forEach((participant, index) => {
	console.log(`[${index + 1}] ${participant}`)
})
