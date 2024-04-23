'use strict'
const test = () => {

const sentence = 'to jest przykladowe zdanie.'
console.log(sentence.length);
console.log(sentence[0]);
console.log(sentence[sentence.length -1]);
console.log(sentence.includes('to'));
const modify = sentence[0].toUpperCase() + sentence.slice(1)
console.log(modify);
}

test()

