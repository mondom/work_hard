'use strict'

const mySet = new Set();

mySet.add("jabłko");
mySet.add("banan");
mySet.add("pomarańcza");
mySet.add("truskawka");

console.log(`Zawartość zbioru:`);
for(const item of mySet){
	console.log(item);
}