'use strict'

const userPrototype = {
	introduce(){
		console.log(`Hi, my name is ${this.name}. I am ${this.age} years old.`);
	}
}

function createUser(name, age){
	const user = Object.create(userPrototype)
	user.name = name
	user.age = age
	return user

}

const user1 = createUser('john', 25)
user1.introduce()

