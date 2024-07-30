"use strict"

function calculateTax(income) {
	let tax = 0

	if (income <= 50000) {
		tax = income * 0.15
	} else if (income > 50000 && income <= 100000) {
		tax = income * 0.2
	} else if (income > 100000) {
		tax = income * 0.3
	}
    return tax
}

const income = 75000


const taxAmount = calculateTax(income)

console.log(`Podatek dla dochodu ${income}zł wynosi: ${taxAmount}zł`);