'use strict'

const person = {
	setPrivateFields(value) {
		const privateFieldValue = value
		privateFields.privateFieldKey = privateFieldValue
	},
	getPrivateField(){
		return this.privateFieldValue
	}
}

const privateFields = {}

const privateFieldKey = Symbol()
