'use strict'
const input = document.querySelector('input')
const btn = document.querySelector('.btn')

const kwotaTransakcji = 1000
const typ = 'przelew'

const calculateBankFee = (kwota, typTransakcji, oprocentowanie = 0.05) => {
	let oplata = 0
	if (typTransakcji === 'przelew') {
		oplata = oplata + 1.5
	} else if (typTransakcji === 'wplata') {
		oplata = oplata + 0.5
	}

	oplata = oplata + kwota * oprocentowanie
	console.log(oplata)
}

const oplataBankowa = calculateBankFee(kwotaTransakcji, typ)
