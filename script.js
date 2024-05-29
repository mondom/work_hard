'use strict'

const map = new Map();
map.set("kolor1", "red");
map.set("kolor2", "blue");
console.log(map);

//lub

const map2 = new Map([
    ["kolor1", "red"],
    ["kolor2", "blue"],
	[1,1],
	[[1,2,3], 8]
]);

map2.set('miś', 'miód')
console.log(map2.get('kolor1'));
console.log(map2.has('kolor1'));
console.log(map2.delete('kolor1'));
console.log(map2.clear());
console.log(map2);