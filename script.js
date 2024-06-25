'use strict'

class KontoBankowe {
	constructor(numer, saldo) {
		this.numer = numer
		this.saldo = saldo
	}

	wplac(kwota) {
		this.saldo += kwota
		console.log(`Wplacono ${kwota} zl na konto ${this.numer}. Aktualne saldo: ${this.saldo} zl`)
	}
	wyplac(kwota) {
		if (kwota < this.saldo) {
			this.saldo -= kwota
			console.log(`Wyplacono ${kwota} zl z konta ${this.numer}. Aktualne saldo: ${this.saldo} zl`)
		} else {
			console.log(`Brak wystarczających srodkow na koncie ${this.numer}.`)
		}
	}
}

class KontoOszczednosciowe extends KontoBankowe {
	constructor(numer, saldo, oprocentowanie) {
		super(numer, saldo)
		this.oprocentowanie = oprocentowanie
	}
	obliczOdsetki() {
		const odsetki = this.saldo * this.oprocentowanie
		this.saldo += odsetki
		console.log(`Obliczono odsetki dla konta oszczednosciowego ${this.numer}. Aktualne saldo: ${this.saldo} zl`)
	}
}

const mojeKonto = new KontoBankowe("123456789", 1000)

mojeKonto.wplac(500)
mojeKonto.wyplac(200)

const mojeKontoOszczednosciowe = new KontoOszczednosciowe("987654321", 2000, 0.05)
mojeKontoOszczednosciowe.wplac(1000)
mojeKontoOszczednosciowe.wyplac(500)
mojeKontoOszczednosciowe.obliczOdsetki()