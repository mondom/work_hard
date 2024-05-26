'use strict'

const produkty = [
	{ nazwa: 'Telefon Samsung', cena: 1500, dostepny: true },
	{ nazwa: 'Laptop Lenovo', cena: 2500, dostepny: true },
	{ nazwa: 'Smartwatch Apple', cena: 800, dostepny: false },
	{ nazwa: 'Telewizor LG', cena: 3000, dostepny: true },
	{ nazwa: 'Sluchawki Sony', cena: 200, dostepny: true },
]

const findAvailableProducts = () => {
	const availableProducts = produkty.filter(product => product.dostepny === true)
}

findAvailableProducts()
