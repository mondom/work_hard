'use strict'

const objects = [
	{ name: 'object1' },
	{ name: 'object2' },
	{ name: 'object3' }
  ];

  // Definiowanie węzłów
const node1 = { value: 'kotek', next: null };
const node2 = { value: 'piesek', next: null };
const node3 = { value: 'pszczółka', next: null };

// Łączenie węzłów w listę
node1.next = node2;
node2.next = node3;

// Teraz node1 to głowa listy jednokierunkowej
let currentNode = node1;
while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
}

// Output:
// 1
// 2
// 3