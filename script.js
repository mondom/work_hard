'use strict'

const trasa = [
	{ x: 0, y: 0 },
	{ x: 100, y: 50 },
	{ x: 200, y: 100 },
	{ x: 300, y: 150 },
	{ x: 400, y: 200 },
]

const samochod = {
	pozycja: 0,
	predkosc: 10,
}

const przesunSamochod = () => {
	let punkt = trasa[samochod.pozycja]

	if (samochod.pozycja === trasa.length) {
		console.log('Koniec trasy')
    clearInterval(run)
    return
	}

	console.log(`Samochod jest na pozycji x: ${punkt.x}, y: ${punkt.y}`)

	samochod.pozycja++
}

const run = setInterval(przesunSamochod, 1000)

