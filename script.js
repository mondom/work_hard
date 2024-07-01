'use strict'

class BankAccount {
	constructor(accountNumber, initialBalance) {
		this._accountNumber = accountNumber
		this._balance = initialBalance
	}

	_checkMinimumBalance() {
		const minimumBalance = 100

		if(this._balance < minimumBalance){
			console.log('Saldo jest zbyt niskie!');
		}
	}
}
