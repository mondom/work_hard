'use strict'

const addBtn = document.querySelector('.btn-inc')
const subBtn = document.querySelector('.btn-dec')
const result = document.querySelector('.result')

let counter = 0

const zwiększLicznik = () => {
	counter++
	aktualizujWynik()
}
const zmiejszLicznik = () => {
	counter--
	aktualizujWynik()
}

const aktualizujWynik = () => {
	result.textContent = counter
}

addBtn.addEventListener('click', zwiększLicznik)
subBtn.addEventListener('click', zmiejszLicznik)
