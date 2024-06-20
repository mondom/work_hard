'use strict'

const person = {
    name: 'John',
    age: 30,
    get info() {
        return `${this.name} is ${this.age} years old`;
    },
    set updateName(newName) {
        this.name = newName;
    }
};

console.log(person.info); // Dostęp do właściwości jak do zwykłej wartości
person.updateName = 'Jane'; // Aktualizacja właściwości jak zwykłej wartości
console.log(person.name);




