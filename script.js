'use strict'

const tasks = [
	{
		name: 'Zakupy spozywcze',
		completed: false,
		priority: 1,
		dueDate: '2024-05-20',
		description: 'Kupić warzywa i owoce',
		category: 'domowe',
	},
	{
		name: 'Sprzatanie mieszkania',
		completed: true,
		priority: 2,
		dueDate: '2024-01-15',
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
let taskDate
let fullDate
const inTime = tasks => {
	const today = new Date()
	const year = today.getFullYear()
	const month = String(today.getMonth() + 1).padStart(2, '0')
	const day = String(today.getDate()).padStart(2, '0')
	fullDate = `${year}-${month}-${day}`
	const newFullDate = new Date(fullDate)
	console.log(newFullDate.getTime())

	for (const task of tasks) {
		taskDate = task.dueDate
		// console.log(taskDate);

		if (taskDate === fullDate) {
			console.log(`Zadanie jest na dzisiaj!`)
		} else if (taskDate < fullDate) {
			console.log(`Zadanie jest po terminie...`)
		} else if (taskDate > fullDate) {
			console.log(`Masz jeszcze czas na wykonanie zadania :)`)
		}
	}

	// console.log(fullDate)
}
inTime(tasks)
