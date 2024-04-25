'use strict'
const input = document.querySelector('input')
const btn = document.querySelector('.btn')

const temperatures = [25, 30, 28, 22, 27]

function test() {
	const sum = temperatures.reduce(function (accum, current) {
	return accum = (accum + current) 
	}, 0)
	const average = sum / temperatures.length
    console.log(average);
}
test()

btn.addEventListener('click', test)
