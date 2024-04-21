'use strict'

const btn = document.querySelector('.btn')

const greetUser = () => {
	const name = prompt('jak masz na imię?')

	if (name) {
		alert(`Witaj ${name}, miło Cię widzieć!`)
	} else {
		alert('Nie podałeś swojego imienia, spróbuj jeszcze raz.')
	}
}

btn.addEventListener('click', greetUser)
