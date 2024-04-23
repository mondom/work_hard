'use strict'
const test = () => {
	const sentence = 'Chcę uzyskać kota z tego zdania.'
	const lastIndex = sentence.length - 1
	console.log(sentence[lastIndex])
	console.log(sentence)
	const frag1 = sentence.slice(13, 16)
	console.log(frag1)
	const frag2 = sentence.substring(13, 16)
	console.log(frag2)
	const frag3 = sentence.substr(13, 3)
	console.log(frag3)
}

test()
