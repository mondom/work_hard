'use strict'

const biblioteka = [
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

const tytul = 'Fantastic Beasts and Where to Find Them'

const test = () => {
	const znalezionaKsiazka = biblioteka.find(obj => obj.tytul === tytul)

	if (znalezionaKsiazka) {
		console.log('Krok 1:')
		console.log('Tytul:', znalezionaKsiazka.tytul)
		console.log('Autor:', znalezionaKsiazka.autor)
		console.log('Rok wydania:', znalezionaKsiazka.rok)
	} else {
		console.log('Krok 1:')
		console.log('Ksiazka o podanym tytule nie zostala znaleziona.')
	}
}

test()
