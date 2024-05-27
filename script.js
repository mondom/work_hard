'use strict'

const produkty = [
	{ nazwa: 'Telefon Samsung', cena: 1500, dostepny: true },
	{ nazwa: 'Laptop Lenovo', cena: 2500, dostepny: true },
	{ nazwa: 'Smartwatch Apple', cena: 800, dostepny: false },
	{ nazwa: 'Telewizor LG', cena: 3000, dostepny: true },
	{ nazwa: 'Sluchawki Sony', cena: 200, dostepny: true },
]

const findProducts = () => {
	const availableProducts = produkty.filter(product => product.dostepny === true)
	console.log('Dostepne produkty:')
	availableProducts.forEach(produkt => {
		console.log('[Nazwa]', produkt.nazwa, '[Cena]', produkt.cena)
	})

	const cheapProducts = produkty.filter(produkt => produkt.cena <= 1500)

	console.log('Produkty tansze niz 1500 PLN:')
	cheapProducts.forEach(product => console.log('[Nazwa]', product.nazwa, '[Cena]', product.cena))

	const phones = produkty.filter(produkt => {
		return produkt.nazwa.toLocaleLowerCase().includes('telefon')
	})

	console.log('Produkty zawierające słowo telefon:');
	phones.forEach(phone => console.log(`[Nazwa] ${phone.nazwa} [Cena] ${phone.cena}`))
}

findProducts()
