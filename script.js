'use strict'
function calculateArea(width, height) {
	let area = width * height
	const printArea = () => {
		console.log(this);
		let result = `wynik to : ${area}`
		console.log(result)
	}

	printArea()
}

calculateArea(5, 10)
