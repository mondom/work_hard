'use strict'
const tempInFahrenheit = 86
let tempInCelsius = 0

const conversionFactor = 5/9
const conversionCelsius = -32

tempInCelsius = (tempInFahrenheit + conversionCelsius) *conversionFactor

console.log(tempInCelsius);