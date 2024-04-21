const favAnimal = 'Kot'

let isAvaliable = false

const avaliableAnimals = ['Pies', 'Biedronka', 'Małpa', 'Kot', 'Królik']

if (avaliableAnimals.includes(favAnimal)) {
	isAvaliable = true
}

if (isAvaliable) {
	console.log('Twoje ulubione zwierzę jest dostępne :)')
} else if (!favAnimal) {
	console.log('Podaj, jakie jest Twoje ulubione zwierze...')
} else {
	console.log('Nie ma Twojego ulubionego zwierza :(')
}
