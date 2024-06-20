'use strict'

const person = {
    _name: 'John',
    _age: 30,
    get name() {
        return this._name;
    },
    set name(newName) {
        if (typeof newName === 'string') {
            this._name = newName;
        } else {
            console.log('Invalid name');
        }
    }
};

person.name = 123; // Invalid name
console.log(person.name); // 'John'
