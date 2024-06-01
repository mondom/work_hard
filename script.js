'use strict'

let myMap = new Map()

myMap.set("Jablka", 5);
myMap.set("Chleb", 2);
myMap.set("Mleko", 1);

console.log(`Klucze z mapy:`);
for(const key of myMap.keys()){
	console.log(key);
}
console.log(`Wartości z mapy:`);
for(const value of myMap.values()){
	console.log(value);
}