'use strict'

let sumaWydatków = 0

const wydatki = [
	{ nazwa: 'Jedzenie', wartosc: 50 },
	{ nazwa: 'Rachunki', wartosc: 100 },
	{ nazwa: 'Transport', wartosc: 30 },
	{ nazwa: 'Zakupy', wartosc: 70 },
]

wydatki.forEach(kwota => {
	sumaWydatków += kwota.wartosc
})

console.log(sumaWydatków);
