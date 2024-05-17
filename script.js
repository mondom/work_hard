'use strict'

// const objects = [
// 	{ name: 'object1' },
// 	{ name: 'object2' },
// 	{ name: 'object3' }
//   ];

// objects[0].ref = objects[1]
// objects[1].ref = objects[2]
// console.log(objects[0]);
// console.log(objects[1]);

// function garbageCollage(objects){
// const reachableObjects = new Set()
// console.log(reachableObjects);
// }

// garbageCollage(objects)

const objects = [
	{ name: 'object1' }, 
	{ name: 'object2' }, 
	{ name: 'object3' }
]

objects[0].ref = objects[1]
objects[1].ref = objects[2]

const stack = [objects[0]]
const visited = new Set()

while (stack.length > 0) {
	const currentObject = stack.pop()

	if (visited.has(currentObject)) {
		continue
	}

	visited.add(currentObject)

	console.log(currentObject.name)

	if (typeof currentObject.ref !== 'undefined') {
		stack.push(currentObject.ref)
	}
}
