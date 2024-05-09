'use strict'

function Task(title,description){
	this.title = title
	this.description = description
}

Task.prototype.printTask = function(){
	console.log(`Zadanie: ${this.title}`);
	console.log(`Opis: ${this.description}`);
}

const task1 = new Task('Zakupy spożywcze', 'Kupić jajka, mleko i chleb')

task1.printTask();