'use strict'

const tasks = [
	{
		name: 'Zakupy spozywcze',
		completed: false,
		priority: 1,
		dueDate: '2024-05-16',
		description: 'Kupić warzywa i owoce',
		category: 'domowe',
	},
	{
		name: 'Sprzatanie mieszkania',
		completed: true,
		priority: 2,
		dueDate: '2024-10-15',
		description: 'Odkurzyć i umyć podłogi',
		category: 'domowe',
	},
	{
		name: 'Nauka JavaScript',
		completed: false,
		priority: 3,
		dueDate: '2024-05-15',
		description: 'Przerobić rozdziały 1-3',
		category: 'nauka',
	},
]

// const manageTasks = arrOfTasks => {
// 	for (const task of arrOfTasks) {
// 		console.log(`Zadanie: ${task.name} - ${task.completed ? 'jest' : 'nie jest'} wykonane`)
// 	}
// }

// manageTasks(tasks)
let newTaskDate
let newFullDate
const inTime = tasks => {
	const today = new Date()
	const year = today.getFullYear()
	const month = String(today.getMonth() + 1).padStart(2, '0')
	const day = String(today.getDate()).padStart(2, '0')
	const fullDate = `${year}-${month}-${day}`
	newFullDate = (new Date(fullDate)).getTime()
	

	for (const task of tasks) {
		const taskDate = task.dueDate
		
		newTaskDate = (new Date(taskDate)).getTime()
		

		if (newTaskDate === newFullDate) {
			console.log(`Zadanie jest na dzisiaj!`)
		} else if (newTaskDate < newFullDate) {
			console.log(`Zadanie jest po terminie...`)
		} else if (newTaskDate > newFullDate) {
			console.log(`Masz jeszcze czas na wykonanie zadania :)`)
		}
	}

	// console.log(fullDate)
}
inTime(tasks)
