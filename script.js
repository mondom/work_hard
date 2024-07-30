"use strict"

function rollDice() {
	const min = 1
	const max = 6

    const diceThrow = Math.floor(Math.random() * (max - min + 1)) + min
    return diceThrow
}


const result = rollDice()
console.log('Wynik rzutu kostką: ', result);