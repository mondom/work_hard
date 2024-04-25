'use strict'
const input = document.querySelector('input')
const btn = document.querySelector('.btn')

const numbers = [10, 7, 4, 12, 11, 20, 9, 13]

function test() {
	for (let i = 0; i < numbers.length; i++) {
        if(isPrime(numbers[i])){
            console.log(`Liczba pierwsza znaleziona: ${numbers[i]}`);
            break
        }
    }
}
test()

function isPrime(number) {
	if (number < 2) {
		return false
	}

	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			return false
		}
	}
	return true
}

btn.addEventListener('click', test)
