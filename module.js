let listaKontaktow = []

function dodajKontakt(imie, nazwisko, nrTel) {
	const kontakt = {
		imie: imie,
		nazwisko: nazwisko,
		nrTel: nrTel,
	}
	listaKontaktow.push(kontakt)
}

function usunKontakt(nrTel) {
	listaKontaktow = listaKontaktow.filter(kontakt =>{ return kontakt.nrTel !== nrTel})
}

function wyswietlKontakty() {
	console.log("Lista kontaktów")
	listaKontaktow.forEach((kontakt, index) => {
		console.log(
			`${index + 1}. Imię: ${kontakt.imie}, Nazwisko: ${
				kontakt.nazwisko
			}, Nr telefonu: ${kontakt.nrTel}`
		)
	})
}

export {
	dodajKontakt as dodaj,
	usunKontakt as usun,
	wyswietlKontakty as wyswietl,
}
