'use strict'

function displayCurrentDateTime() {
	let currentDate = new Date()
	let year = currentDate.getFullYear()
	let month = currentDate.getMonth()
	let day = currentDate.getDate()
	let hours = currentDate.getHours()
	let minutes = currentDate.getMinutes()
	let seconds = currentDate.getSeconds()
	let miliseconds = currentDate.getMilliseconds()

	console.log(`Current date: ${day}/${month + 1}/${year}`)

	console.log(`Current time: ${hours}:${minutes}:${seconds}:${miliseconds}`)
}

displayCurrentDateTime()
