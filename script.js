'use strict'

class BankAccount {
	constructor(accountNumber, initialBalance) {
		this._accountNumber = accountNumber
		this._balance = initialBalance
	}

	_checkMinimumBalance() {
		const minimumBalance = 100

		if (this._balance < minimumBalance) {
			console.log('Saldo jest zbyt niskie!')
		}
	}

	getBalance() {
		return this._balance
	}

	deposit(amount) {
		this._balance += amount
	}
	withdraw(amount) {
		this._balance -= amount
		this._checkMinimumBalance()
	}
}

const account1 = new BankAccount('1234567890', 500)

account1.deposit(200)
account1.withdraw(610)

const result = account1.getBalance()
console.log(result)
