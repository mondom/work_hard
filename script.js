'use strict'

class Produkt {
	constructor(nazwa, cena) {
		this.nazwa = nazwa
		this.cena = cena
	}

	pobierzNazwę() {
		return this.nazwa
	}

	pobierzCenę() {
		return this.cena
	}
}

class Klient {
	constructor() {
		this.koszyk = []
	}
	static licznikProduktow = 0

	dodajProdukt(produkt) {
		this.koszyk.push(produkt)
		Klient.licznikProduktow++
	}

	usunProdukt(index) {
		this.koszyk.splice(index, 1)
		Klient.licznikProduktow--
	}
	obliczWartoscKoszyka() {
		const suma = 0
		for (let produkt of this.koszyk) {
			suma += produkt.pobierzCene()
		}
		return suma
	}
}

const klient1 = new Klient()
const klient2 = new Klient()

const produkt1 = new Produkt("Telewizor", 1999.99);
const produkt2 = new Produkt("Smartfon", 1299.99);

klient1.dodajProdukt(produkt1)
klient1.dodajProdukt(produkt2)
console.log("Wartosc koszyka klienta 1:", klient1.obliczWartoscKoszyka());