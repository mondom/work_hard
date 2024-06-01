'use strict'

let magazyn = new Map()


magazyn.set('Telewizor', 5)
magazyn.set('Laptop', 10)
magazyn.set('Smartfon', 20)
magazyn.set('Konsola', 15)

console.log('Zawartość magazynu:');

magazyn.forEach((produkt, ilosc) => {
console.log(produkt +':' + ilosc);
})

let test = {
	danie: 'bowl',
	picie: 'woda'
}

let testConvert = Object.entries(test)
console.log(testConvert);


testConvert.forEach((kategoria) => {
	console.log(kategoria);
	})
