const listaZadan = []

function dodajZadanie(tekstZadania) {
	listaZadan.push(tekstZadania)
}

function wyswietlZadania() {
	console.log("Lista zadań:")
	for (let i = 0; i < listaZadan.length; i++) {
		console.log(`${i + 1}. ${listaZadan[i]}`)
	}
}

export { dodajZadanie, wyswietlZadania }
