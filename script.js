'use strict'

class Produkt {
	constructor(nazwa, cena, opis) {
		this.nazwa = nazwa
		this.cena = cena
		this.opis = opis
	}
	informacje() {
		console.log(`Produkt: ${this.nazwa}`)
		console.log(`Cena: ${this.cena} zl`)
		console.log(`Opis: ${this.opis}`)
	}
}



class Elektronika extends Produkt {
	constructor(nazwa, cena, opis, marka) {
		super(nazwa, cena, opis)

		this.marka = marka
	}
	informacje() {
		super.informacje()
		console.log(`Marka: ${this.marka}`)
	}
}



const laptop = new Produkt('Laptop', 2500, 'Wydajny laptop do pracy i rozrywki.')

const telewizor = new Elektronika('Telewizor', 1500, 'Duzy telewizor z rozdzielczoscia 4K.', 'Samsung')



laptop.informacje()

console.log('-----------------')

telewizor.informacje()



