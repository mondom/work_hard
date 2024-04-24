'use strict'
const test = () => {
	const minHeight = 150
	const userHeight = prompt('Podaj swój wzrost w cm')

	if (userHeight === '' || isNaN(userHeight)) {
		console.log('podaj wzrost wpisując liczbę')
	} else if (userHeight >= minHeight) {
		console.log('Możesz skorzystać z karuzeli')
	} else {
		console.log('Jesteś za niski');
	}
} 

test()
