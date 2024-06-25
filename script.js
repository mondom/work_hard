'use strict'

class listaZakupow {
	constructor() {
		this.zakupy = []
	}

	dodajElement(nazwa) {
		this.zakupy.push(nazwa)
		console.log(`Dodano ${nazwa} do listy zakupów`)
	}
	usunElement(nazwa) {
		if (this.zakupy.length !== 0) {
			const index = this.zakupy.indexOf(nazwa)
			console.log(`Usunięto ${nazwa} z listy zakupów.`)
			this.zakupy.splice(index, 1)
		} else {
			console.log('Lista zakupów jest pusta')
		}
	}
	wyswietlListe() {
		console.log('Lista Zakupów')
		this.zakupy.forEach((item, index) => {
			console.log(index + '. ' + item)
		})
	}
}

const mojaListaZakupow = new listaZakupow()

mojaListaZakupow.dodajElement('Jablka')
mojaListaZakupow.dodajElement('Chleb')
mojaListaZakupow.dodajElement('Mleko')

mojaListaZakupow.usunElement('Chleb')

mojaListaZakupow.wyswietlListe()
