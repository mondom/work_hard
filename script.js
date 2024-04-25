'use strict'

function test() {
	let sumaKalorii = 0

	let wprowadzoneKalorie
	while (wprowadzoneKalorie !== 'stop') {
		wprowadzoneKalorie = prompt('Wpisz ilość spożytych kalorii')
		if (wprowadzoneKalorie !== 'stop') {
			sumaKalorii = parseInt(sumaKalorii) + parseInt(wprowadzoneKalorie)
		}
	}
	alert(sumaKalorii)
}

test()
