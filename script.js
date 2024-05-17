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
	{ name: 'object1', ref: null },
	{ name: 'object2', ref: null },
	{ name: 'object3', ref: null }
  ];
  
  // Łączenie obiektów referencjami
  objects[0].ref = objects[1];
  objects[1].ref = objects[2];
  
  // Tworzenie stosu i umieszczenie na nim głównego obiektu
  const stack = [objects[0]];

  
  // Zbiór do śledzenia odwiedzonych obiektów
  const visited = new Set();
  
  // Iteracja nad obiektami przy użyciu stosu
  while (stack.length > 0) {
	const currentObject = stack.pop();
	
	// Sprawdzamy, czy obiekt został już odwiedzony
	if (visited.has(currentObject)) {
	  continue; // Przechodzimy do następnej iteracji, jeśli obiekt był już odwiedzony
	}
	
	// Dodajemy obiekt do odwiedzonych
	visited.add(currentObject);
	
	// Przetwarzamy obiekt (np. wyświetlamy jego nazwę)
	console.log(currentObject.name);
	
	// Dodajemy referencję obiektu do stosu, jeśli istnieje
	if (currentObject.ref !== null) {
	  stack.push(currentObject.ref);
	  console.log(currentObject);
	  console.log(stack);
	}
  }

