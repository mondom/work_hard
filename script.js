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
}
