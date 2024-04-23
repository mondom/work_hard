'use strict'
const test = () => {
	const age = parseInt(prompt('Podaj swój wiek:'))
	console.log(age)
	const minAge = 25

	const hasLicense = prompt('Czy posiadasz prawo jazdy Tak/Nie?').toLowerCase() === 'tak'
	console.log(hasLicense)

	if (age >= minAge && hasLicense) {
		alert('Możesz wypożyczyć samochód')
	} else {
		alert('Musisz mieć ukończone 25 lat i posiadać prawo jazdy!')
	}
}
test()
