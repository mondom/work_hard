'use strict'

function countDown(num) {
	if (num <= 0) {
		return console.log('Koniec liczenia')
	}

  console.log(num);
	countDown(num - 1)
}

countDown(5)
