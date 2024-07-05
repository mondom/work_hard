'use strict'

// function fetchData() {
// 	return new Promise(resolve => {
// 		setTimeout(() => {
// 			const data = [1, 2, 3, 4, 5]
// 			resolve(data)
// 		}, 800)

// 	})
// }

// fetchData()
// 	.then(dat => console.log(`Dane z serwera: `, dat))

// 	.catch(err => console.error('Blad podczas pobierania danych: ' + err))

const arr = [1, 2, 3, 4, 5]

console.log(arr)
console.log('I to również: ', arr)

console.log(`To jest tablica: ${arr}`)
console.log('To też jest tablica: ' + arr)

console.log('A tutaj łączymy metodą tablicę: ' + arr.join(' '))
