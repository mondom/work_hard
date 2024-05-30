'use strict'

const map = new Map([
	['kolor1', 'red'],
	['kolor2', 'blue'],
	['kolor3', 'yellow'],
])

for (const key of map.keys()) {
	console.log(map.keys())
	console.log(key)
}

for (const value of map.values()) {
	console.log(map.values())
	console.log(value)
}

for(const entry of map.entries()){
    console.log(map.entries());
    console.log(entry);
}
