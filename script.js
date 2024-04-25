'use strict'
const input = document.querySelector('input')
const btn = document.querySelector('.btn')

const szukanaLiczba = Math.floor(Math.random() * 10) + 1
let liczbaPrób = 5


function test() {
    const zgadywanaLiczba = parseInt(input.value)

	if (zgadywanaLiczba === szukanaLiczba) {
		console.log('Trafiłeś i wygrałeś 🎉')
	} else if (zgadywanaLiczba > szukanaLiczba) {
		console.log('Podana liczba jest za duża, spróbuj ponownie')
		liczbaPrób--
	} else if (zgadywanaLiczba < szukanaLiczba) {
		console.log('Podana liczba jest za mała, spróbuj ponownie')
		liczbaPrób--
	}

	if (liczbaPrób === 0) {
		console.log('Wykorzystałeś wszystkie szanse, przegrałeś...')
	}
}

btn.addEventListener('click', test)
