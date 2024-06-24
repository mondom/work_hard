'use strict'

class Book {
	constructor(title, author) {
		this.title = title
		this.author = author
	}

	getTitle() {
		console.log(`Title of book is ${this.title}.`)
	}
	getAuthor() {
		console.log(`Author of book is ${this.author}.`)
	}
	set setDescription(description) {
		this.description = description
	}

	get getDescription() {
		console.log(`A book about love and adventure.`)
	}

	printDetails() {
		console.log(`Title: ${this.title}`)
		console.log(`Author: ${this.author}`)
		this.getDescription
	}
}

const newBook = new Book('Wladca Pierscieni', 'J.R.R. Tolkien')
newBook.getTitle()
newBook.getAuthor()
newBook.getDescription
newBook.printDetails()
