'use strict'
const input = document.querySelector('input')
const btn = document.querySelector('.btn')

const szukanaLiczba = Math.floor(Math.random() * 10) + 1
let liczbaPrób = 5

const slowa = 'Kot jest najlepszy na świecie'.split(' ')


let dlugosci = []

function test(slowa) {
	for (let i = 0; i < slowa.length; i++) {
        const dlugosc = slowa[i].length
        dlugosci.push(dlugosc)
    }
    console.log(`Długości słów to: ${dlugosci}`);


}
test(slowa)

btn.addEventListener('click', test)
