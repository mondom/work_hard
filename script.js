'use strict'

let shoppingList = new Map()

shoppingList.set('Jabłka', 5)
shoppingList.set('Chleb', 2)
shoppingList.set('Mleko', 1)

console.log('Zawartość listy zakupów:')
for (const [item, number] of shoppingList.entries()) {
	console.log(item + ': ' + number)
}
shoppingList.delete('Chleb')
console.log('Zawartość listy zakupów po usunięciu:')
for (const [item, number] of shoppingList.entries()) {
	console.log(item + ': ' + number)
}
shoppingList.clear()
console.log('Zawartość listy zakupów po zakupach:')
for (const [item, number] of shoppingList.entries()) {
	console.log(item + ': ' + number)
}
