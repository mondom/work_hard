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
		const index = this.#tasks.findIndex(obj => obj.title === title)

		this.#tasks.at(index).status = 'finish'
		console.log(this.#tasks)

		// zrobić to samo za pomocą metody find()
	}
}

const test = new TaskList()
test.addTask('hej')
test.addTask('ho')
test.addTask('hu')
test.markTaskAsDone('ho')
test.removeTask('hu')
