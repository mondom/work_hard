'use strict'

const taxRate = 23
const price = parseFloat((100).toFixed(2))
const taxAmount = parseFloat((price * taxRate / 100).toFixed(2))


const finalPrice = price + taxAmount

console.log(`Podatek VAT: ${taxAmount} PLN`);
console.log(`Cena z podatkiem VAT: ${finalPrice} PLN`);
