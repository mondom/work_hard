"use strict"

import * as dania from "./module.js"

function obliczCalkowitaWartoscZamowienia(daniaArr) {
	let sum = 0
	for (const danie of daniaArr) {
		const oneDish = danie.cena * danie.ilosc
		sum += oneDish
	}
	return sum.toFixed(2)
}

const wszystkieDania = [dania.danie1, dania.danie2, dania.danie3]
const calkowitaWartoscZamowienia = obliczCalkowitaWartoscZamowienia(wszystkieDania)

console.log("Calkowita wartosc zamowienia: ", calkowitaWartoscZamowienia);