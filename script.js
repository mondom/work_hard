'use strict'

const obowiazki = [
	{ czas: '08:00', tekst: 'Wstawanie' },
	{ czas: '12:00', tekst: 'Obiad' },
	{ czas: '18:00', tekst: 'Spacer' },
	{ czas: '22:00', tekst: 'Odpoczynek' },
]

function ustawPrzypomnienie(obowiazek) {
	const currentDate = new Date()
	const [godzina, minuta] = obowiazek.czas.split(':')

	const przypomnienie = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		currentDate.getDate(),
		godzina,
		minuta
	)
	const czasPrzypomnienia = przypomnienie.getTime() - currentDate.getTime()

	const interwalId = setTimeout(() => {
		console.log(obowiazek.tekst)
		clearTimeout(interwalId)
	}, czasPrzypomnienia) 
}

for (const obowiazek of obowiazki) {
	ustawPrzypomnienie(obowiazek)
}
