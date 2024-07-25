"use strict"

function* productCodeGenerator(length, prefix = "") {
	let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	let codeLength = length - prefix.length
	while (true) {
		let code = prefix
		for (let i = 0; i < codeLength; i++) {
			const randomIndex = Math.floor(Math.random() * characters.length)
            console.log('----'+ randomIndex);
			code += characters.charAt(randomIndex)
		}

		yield code
	}
}

const generator = productCodeGenerator(8,'LED')

console.log(generator.next().value)
console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)






