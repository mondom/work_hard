'use strict'

const library = [
	{
		tytul: "Harry Potter and the Philosopher's Stone",
		autor: 'J.K. Rowling',
		rok: 1997,
	},
	{ tytul: 'To Kill a Mockingbird', autor: 'Harper Lee', rok: 1960 },
	{
		tytul: 'Fantastic Beasts and Where to Find Them',
		autor: 'J.K. Rowling',
		rok: 2001,
	},
	{ tytul: 'The Lord of the Rings', autor: 'J.R.R. Tolkien', rok: 1994 },
	{ tytul: 'Go Set a Watchman', autor: 'Harper Lee', rok: 2015 },
]

const titleSought = 'Fantastic Beasts and Where to Find Them'

const findBook = () => {
	const foundBook = library.find(book => book.tytul === titleSought)

	if (foundBook) {
		console.log(`Krok 1:\nTytuł: ${foundBook.tytul}\nAutor: ${foundBook.autor}\nRok wydania: ${foundBook.rok}`)
	} else {
		console.log('Krok 1:')
		console.log('Ksiazka o podanym tytule nie zostala znaleziona.')
	}
}
const author = 'Harper Lee'
const findIndex = () => {
	const index = library.findIndex(book => book.autor === author)

	if (index !== -1) {
		console.log('Krok 2:')
		console.log('Indeks ksiazki:', index)
	} else {
		console.log('Krok 2:')
		console.log('Ksiazka o podanym autorze nie zostala znaleziona.')
	}
}
const findLastIndex = () => {
	const lastIndex = library.findLastIndex(book => book.autor === author)

	if (lastIndex !== -1) {
		console.log('Krok 3:')
		console.log('Indeks ksiazki:', lastIndex)
	} else {
		console.log('Krok 3:')
		console.log('Ksiazka o podanym autorze nie zostala znaleziona.')
	}
}

findBook()
findIndex()
findLastIndex()