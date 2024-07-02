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
			console.log('Produkt został dodany do listy');
		}

		
	}

	removeItem(item) {
		const index = this.#items.findIndex(it => it === item)

		if(index !== -1){
			this.#items.splice(index, 1)
		}else{
			console.log('Produkt nie istnieje na liście');
		}
		
	}

	showItems(){
		if(this.#items.length !== 0){
			console.log(`Lista Zakupów:`)
			this.#items.forEach(item => {
				console.log(`- ${item}\n`);
			})
		}
	}
}

const test = new ShoppingList()

test.addItem('mleko')
test.addItem('jajka')
test.addItem('kakao')
test.addItem('chleb')
test.showItems()
test.removeItem('kakao')
test.showItems()

