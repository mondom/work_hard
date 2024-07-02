'use strict'

class TaskList {
	#tasks
	constructor() {
		this.#tasks = []
	}

	addTask(title) {
		const task = {
			title: title,
			status: 'unfinish',
		}

		this.#tasks.push(task)
	}

	removeTask(title) {
		const index = this.#tasks.findIndex(obj => {
			return obj.title === title
		})
		if (index !== -1) {
			this.#tasks.splice(index, 1)
		}
	}

	markTaskAsDone(title) {
		// const index = this.#tasks.findIndex(obj => obj.title === title)

		// this.#tasks.at(index).status = 'finish'

		const task = this.#tasks.find(obj => obj.title === title)
		if(task){
			task.status = 'finish'
		}
		console.log(this.#tasks)
		
	}
	showTasks(){
		for(const task of this.#tasks){
			console.log(`Tytuł: ${task.title} | Status: ${task.status}`);
		}
	}
}

const test = new TaskList()
test.addTask('Zadanie 1')
test.addTask('Zadanie 2')
test.addTask('Zadanie 3')
test.markTaskAsDone('Zadanie 2')
test.removeTask('Zadanie 3')
test.showTasks()