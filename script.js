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
	obliczWartoscKoszyka(){
		suma = 0
for(const produkt of pro)
	}
}