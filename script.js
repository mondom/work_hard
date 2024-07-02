'use strict'

class ShoppingList {
	#items
	constructor() {
		this.#items = []
	}
	#isDuplicate(item) {
		const result = this.#items.includes(item)
		return result
	}

	addItem(item) {
		if (this.#isDuplicate(item)) {
			console.log('Produkt już istnieje na liście')
		} else {
			this.#items.push(item)
		}

		console.log(this.#items)
	}

	removeItem(item) {
		const index = this.#items.findIndex(it => it === item)

		if(index !== -1){
			this.#items.splice(index, 1)
		}else{
			console.log('Produkt nie istnieje na liście');
		}
		console.log(this.#items)
	}
}

const test = new ShoppingList()

test.addItem('item 1')
test.addItem('item 2')
test.addItem('item 3')
test.addItem('item 1')
test.removeItem('item 5')
