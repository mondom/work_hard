'use strict'

const randomArr = []

const arrGenerator = (length, range) => {
	let i = 0
	while (i < length) {
		let number = Math.floor(Math.random() * range)
		randomArr.push(number)
		i++
	}
}

arrGenerator(10, 200)
console.log(randomArr)
