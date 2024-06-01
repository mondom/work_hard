'use strict'

let magazyn = new Map()

magazyn.set('Telewizor', 5)
magazyn.set('Laptop', 10)
magazyn.set('Smartfon', 20)
magazyn.set('Konsola', 15)

console.log('Zawartość magazynu:')

magazyn.forEach((ilosc, produkt) => {
	console.log(produkt + ': ' + ilosc)
})

magazyn.set('Telewizor', 3)

console.log('Zawartość magazynu:')

magazyn.forEach((ilosc, produkt) => {
	console.log(produkt + ': ' + ilosc)
})

magazyn.delete('Smartfon')

console.log('Zawartość magazynu:');
magazyn.forEach((ilosc,produkt)=>{
	console.log(produkt + ': ' + ilosc);
})