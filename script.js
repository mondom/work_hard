'use strict'

let fragment1 = 'To jest pierwszy fragment tekstu.'
let fragment2 = ' A to jest drugi fragment tekstu.'

const calytekst = fragment1.concat(fragment2)

console.log(calytekst)

const wycinek = calytekst.slice(0, 10)
console.log(wycinek)
