'use strict'
const input = document.querySelector('input')
const btn = document.querySelector('.btn')

const grades = [3, 4, 5, 2, 3, 5, 4, 2, 4, 5]
// suma ocen
let sum = 0
// liczba ocen branych pod uwagę
let count = 0

function test() {
	for (let i = 0; i < grades.length; i++) {
		if (grades[i] < 3) {
			continue
		} else {
			sum = sum + grades[i]
			count++
		}
	}
    const average = sum /count
    console.log(`Średnia ocen to: ${average.toFixed(2)}`);
}
test()

btn.addEventListener('click', test)
