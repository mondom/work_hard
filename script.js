"use strict"

const centimetersToInchesRatio = 0.393701
const inchesToCentimetersRatio = 2.54

const centimetersValue = 30
const inchesValue = 10

function convertCentimetersToInches(cen) {
	const result = cen * centimetersToInchesRatio
	return result.toFixed(2)
}

function convertInchesToCentimeters(inches){
	const result = inches * inchesToCentimetersRatio
	return result
}



const resultCen = convertCentimetersToInches(centimetersValue)
console.log(`${centimetersValue} centymetrów to równowartość ${resultCen} cali.`)

const resultInches = convertInchesToCentimeters(inchesValue)
console.log(`${inchesValue} cali to równowartość ${resultInches} centymetrów.`);