'use strict'

class RachunekGieldowy{
	constructor(imie,nazwisko){
		this.imie=imie
		this.nazwisko=nazwisko
	}

	static obliczWartoscAkcji(cenaAkcji){
		return cenaAkcji * 100;
	}
}

const rachunek = new RachunekGieldowy('Jan','Kowalski')
const cenaAkcji = 10.5

const wartoscAkcji = RachunekGieldowy.obliczWartoscAkcji(cenaAkcji)

console.log(`Imię i nazwisko: ${rachunek.imie} ${rachunek.nazwisko}\nWartość akcji wynosi: ${wartoscAkcji}`);
