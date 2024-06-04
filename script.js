'use strict'

function countDayOfWeek(){
	let currentDate = new Date()
	let daysOfWeek = []

	for(let i = 0;i<7;i++){
		let dateCopy = new Date(currentDate.getTime())

		dateCopy.setDate(currentDate.getDate() + i);

		let dayOfWeek = dateCopy.toLocaleDateString("pl-PL", {
			weekday: "long",
		});
		daysOfWeek.push(dayOfWeek);
	}
	console.log(daysOfWeek);
}
countDayOfWeek()

