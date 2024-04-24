'use strict'
const test = () => {
	const year = parseInt(prompt('Podaj który mamy rok'))
	let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

	if (year <= 2001 || year >= 2100) {
		console.log(`${year} nie należy do XXI wieku`)
	} else if (!isLeapYear && (year >= 2001 && year <= 2100)) {
		console.log(`${year} nie jest przestepny i należy do XXI wieku.`)
	} else if (isLeapYear && (year >= 2001 && year <= 2100)) {
		console.log(`${year} jest przestepny i należy do XXI wieku.`)
	}
}

test()
