'use strict'

const text = 'To jest przykladowy tekst. Zawiera on kilka zdan. Ktore bedziemy analizowac.'

const countSentence = text => {
	let sentences = 0
	const sentenceArray = text.split('.')
	for (let sentence of sentenceArray) {
		sentence = sentence.trim()
		console.log(sentence);
		if (sentence.length > 0) {
			sentences++
		}
	}
	return sentences
}

const sentenceCount = countSentence(text)

console.log(`Liczba zdań: ${sentenceCount}`);
