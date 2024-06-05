'use strict'

const jsonUser = '{"name":"John Doe","age":30,"email":"john@example.com"}';

const parseUser = (jsonUser) => {

	const user = JSON.parse(jsonUser)
	console.log(user.name);
	console.log(user.age);
	console.log(user.email);
}



parseUser(jsonUser)
