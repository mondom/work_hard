'use strict'

function gotujJajka() {
	let czasGotowania = 0

	function sprawdxStanJajek() {
		czasGotowania++

		if (czasGotowania === 5) {
			console.log('Jajka są na wpół ugotowane')
		} else if (czasGotowania === 8) {
			console.log('Jajka są prawie gotowe!')
		} else if (czasGotowania === 10) {
			console.log('Jajka są gotowe!')
			return
		}
		setTimeout(sprawdxStanJajek, 1000)
	}
	sprawdxStanJajek()
}

setTimeout(gotujJajka, 3000)
