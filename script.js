'use strict'

const shoppingList = []

const shoppingApp = {
	set list(item) {
		shoppingList.push(item)
	},
	set removeItem(item) {
		const number = shoppingList.indexOf(item)
		if (number !== -1) {
			shoppingList.splice(number, 1)
		}
	},

	get count() {
		return shoppingList.length
	},
	get items() {
		return shoppingList.join(', ')
	},
}

shoppingApp.list = 'Buty'
shoppingApp.list = 'Ciasto'
shoppingApp.list = 'Kawa'
shoppingApp.list = 'Kapelusz'
shoppingApp.list = 'Mydło'

console.log('[Lista zakupow na poczatku]');
console.log('Produkty: '+ shoppingApp.items);
console.log('Ilość produktów: ' + shoppingApp.count);
shoppingApp.removeItem = 'Ciasto'
console.log('[Lista zakupow po modyfikacji]');
console.log('Produkty: '+ shoppingApp.items);
console.log('Ilość produktów: ' + shoppingApp.count);
// [Lista zakupow na poczatku]
// Produkty: Jablka, Chleb, Mleko
// Ilosc produktow: 3
// [Lista zakupow po modyfikacji]
// Produkty: Jablka, Mleko
// Ilosc produktow: 2