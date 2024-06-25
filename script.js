'use strict'

class Book {
	constructor(title, author) {
		this.title = title
		this.author = author
	}

	getTitle() {
		return this.title
	}
	getAuthor() {
		return this.author
	}
	setDescription(description) {
		this.description = description
	}

	getDescription() {
		return this.description
	}

	printDetails() {
		console.log(`Title: ${this.title}`)
		console.log(`Author: ${this.author}`)
		console.log(`Opis: ${this.description}`)
	}
}

const myBook = new Book('Wladca Pierscieni', 'J.R.R. Tolkien')
myBook.setDescription('Ksiazka przygodowa o przyjazni, zaufaniu, lojalnosci...')
console.log(myBook.getTitle());
console.log(myBook.getAuthor());
console.log(myBook.getDescription());
myBook.printDetails()


