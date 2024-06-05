'use strict'

function calculateElapsedTime() {

	let startTime = Date.now()
	let sum = 0
	for (let i = 0; i < 50000; i++) {
		sum += i;
		console.log(sum);
	}

	let endtime = Date.now()

	const result = endtime - startTime

	console.log(result);
}

calculateElapsedTime()




