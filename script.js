'use strict'

// const person = {}

// const privateFields = {}

// const privateFieldKey = Symbol()

// person.setPrivateField = function (value) {
// 	const privateFieldValue = value
// 	privateFields[privateFieldKey] = privateFieldValue
// }

// person.getPrivateField = function () {
// 	if (privateFieldKey in privateFields) {
// 		return privateFields[privateFieldKey]
// 	}
// 	return null
// }

// person.setPrivateField(42)

// const privateValue = person.getPrivateField()
// console.log(privateValue)

const cat = {
	setName(name) {
		privData[catName] = name
		// const privNameofCat = name
	},
	getName() {
		if (catName in privData) {
			console.log(privData[catName]); 
		} else {
			console.log(null);
		}
	},
}

const privData = {}

const catName = Symbol()
cat.setName('Lucjanek')
cat.getName()
// console.log(privData[catName])
