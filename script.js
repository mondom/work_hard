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

const findBook = () =>{
	const foundBook = library.find(book => {
		book.tytul === titleSought
	})

	if(findBook){
		console.log('ok');
	}
}

findBook()


