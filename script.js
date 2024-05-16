'use strict'

const objects = [{ name: 'object1' }, { name: 'object2' }, { name: 'object3' }]

const osoba = {
	name: 'Ja',
	rodzice: [
		{
			name: 'Ojciec',
			rodzice: [
				{ name: 'Dziadek', rodzice: [] },
				{ name: 'Babcia', rodzice: [] },
			],
		},
		{
			name: 'Matka',
			rodzice: [
				{ name: 'Dziadek', rodzice: [] },
				{ name: 'Babcia', rodzice: [] },
			],
		},
	],
}

const policzPokolenia = osoba => {
	if (osoba.rodzice.length === 0) {
		return 1 // Podstawowy przypadek: brak rodziców
	} else {
		let maxPokoleniaRodzicow = 0
		osoba.rodzice.forEach(rodzic => {
			const pokoleniaRodzica = policzPokolenia(rodzic)
			if (pokoleniaRodzica > maxPokoleniaRodzicow) {
				maxPokoleniaRodzicow = pokoleniaRodzica
			}
		})
		return 1 + maxPokoleniaRodzicow
	}
}

console.log(policzPokolenia(osoba)) // Wynik: 3

// Output:
// root
// child1
// grandchild1
// child2
