'use strict'

function fetchData() {
	return new Promise(resolve => {
		setTimeout(() => {
			const data = [1, 2, 3, 4, 5]
			resolve(data)
		},800)
	})
}

const data = fetchData()

data
	.then(dat => console.log('Dane z serwera: ' + dat))
	.catch(err => console.error('Blad podczas pobierania danych: ' + err))
