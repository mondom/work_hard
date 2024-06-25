'use strict'

class Telewizor {
	constructor(marka) {
		this.marka = marka
		this.wlaczony = false
		this.glosnosc = 50
		this.kanal = 1
	}

	wlacz() {
		 this.wlaczony = true
		 console.log(`Telewizor zostal wlaczony.`);
	}
	wylacz() {
		this.wlaczony = false
		console.log('Telewizor zostal wylaczony.');
	}
	zmienGlosnosc(glosnosc) {
		if (glosnosc >= 0 && glosnosc <= 100) {
			this.glosnosc = glosnosc
			console.log(`Glosnosc zostala zmieniona na ${glosnosc}`);
		} else{
			console.log('Podaj wartość od 0 - 100');
		}
	}
	zmienKanal(kanal){
		this.kanal = kanal
		console.log(`Kanal zostal zmieniony na ${kanal}`);
	}
}

console.dir(Telewizor);

const mojTelewizor = new Telewizor('Samsung')
mojTelewizor.wlacz()
mojTelewizor.zmienGlosnosc(100)
mojTelewizor.zmienKanal(3)
mojTelewizor.wylacz()
