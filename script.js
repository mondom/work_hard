'use strict'

const person = {
    name: "John",
    age: 30,
    city: "New York",
};

const convertToJSON = (obj) => {
	const objJson = JSON.stringify(obj, null, 2)
	console.log(objJson);
}

convertToJSON(person)
