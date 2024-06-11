'use strict'

// function checkSyntax(code) {
// 	const stack = []

// 	for (let i = 0; i < code.length; i++) {
// 		const char = code[i]

// 		if (char === '(' || char === '{' || char === '[') {
// 			stack.push(char)
// 		} else if (char === ')' || char === '}' || char === ']') {
// 			if (stack.length === 0) {
//         console.log('Brak otwierającego nawiasu');
// 				return false
// 			}

// 			const top = stack.pop()

// 			if ((char === ')' && top !== '(') || (char === '}' && top !== '{') || (char === ']' && top !== '[')) {
// 				return false // Niepoprawne sparowanie nawiasów
// 			}
// 		}
// 	}

// 	return stack.length === 0 // Brak zamykającego nawiasu
// }

// const code = "(function() { console.log('Hello, world!'); })()"
// const isSyntaxValid = checkSyntax(code)

// console.log('Czy skladnia kodu jest poprawna?', isSyntaxValid)

function checkSyntax(code) {
	const stack = []

	for (const char of code) {
		if (char === '(' || char === '{' || char === '[') {
			stack.push(char)
		} else if (char === ')' || char === '}' || char === ']') {
			if (stack.length === 0) return false

			const top = stack.pop()
			if ((char === ')' && top !== '(') || (char === '}' && top !== '{') || (char === ']' && top !== '[')) return false
		}
	}

	return stack.length === 0
}

const code = '(function() { console.log("Hello, world!"); })()'
const isSyntaxValid = checkSyntax(code)

console.log('Czy składnia kodu jest poprawna?', isSyntaxValid)
