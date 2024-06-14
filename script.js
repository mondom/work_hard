'use strict'

const dog = {
	name: 'Reksio',
}

const cat = {
	name: 'Alice',
	run(speed) {
		console.log(this.name + ' run ' + speed + ' km')
	},
}

cat.run.bind(dog)(34)
cat.run.bind(dog, 34)()
