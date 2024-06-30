'use strict'

class Produkt {
	constructor(nazwa, cena) {
		this.nazwa = nazwa
		this.cena = cena
	}

	pobierzNazwe() {
		return this.nazwa
	}

	pobierzCene() {
		return this.cena
	}
}

class Klient {
	static licznikProduktow = 0

	constructor() {
		this.koszyk = []
	}

	dodajProdukt(produkt) {
		this.koszyk.push(produkt)
		Klient.licznikProduktow++
	}

	usunProdukt(index) {
		this.koszyk.splice(index, 1)
		Klient.licznikProduktow--
	}
	obliczWartoscKoszyka() {
		let suma = 0
		for (let produkt of this.koszyk) {
			suma += produkt.pobierzCene()
		}
		return suma
	}
}

const klient1 = new Klient()
const klient2 = new Klient()

const produkt1 = new Produkt('Telewizor', 1999.99)
const produkt2 = new Produkt('Smartfon', 1299.99)

klient1.dodajProdukt(produkt1)
klient2.dodajProdukt(produkt2)

console.log('Wartosc koszyka klienta 1:', klient1.obliczWartoscKoszyka())
console.log('Wartosc koszyka klienta 2:', klient2.obliczWartoscKoszyka())

console.log('Liczba produktow we wszystkich koszykach:', Klient.licznikProduktow)
