'use strict'

const programmingLanguages = new Set();

programmingLanguages.add("JavaScript");
programmingLanguages.add("Java");
programmingLanguages.add("Python");

const searchingLanguage = 'JavaScript'

if(programmingLanguages.has(searchingLanguage)){
	console.log(`Element ${searchingLanguage} został znaleziony w zbiorze!`);
}

console.log(`Liczba elementów w zbiorze: ${programmingLanguages.size}`);