'use strict'

function gotujJajka() {
	let czasGotowania = 0

	function sprawdzStanJajek() {
		czasGotowania++

		if (czasGotowania === 5) {
			console.log('Jajka sa na wpol gotowane!')
		}

		if (czasGotowania === 8) {
			console.log('Jajka sa prawie gotowe!')
		}

		if (czasGotowania === 10) {
			console.log('Jajka sa gotowe!')
			return
		}

		setTimeout(sprawdzStanJajek, 1000)
	}

	sprawdzStanJajek()
}

setTimeout(gotujJajka, 3000)
