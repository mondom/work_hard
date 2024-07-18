"use strict"

function checkUsernameAvailability(username) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const takenUsernames = ["john", "emma", "alex"]
			if (!takenUsernames.includes(username)) {
				resolve(true)
			} else {
				reject("Nazwa uzytkownika jest juz zajeta.")
			}
		}, 2000)
	})
}

checkUsernameAvailability("monika")
	.then(available => {
		console.log(`Czy nazwa (monika) jest dostępna? : ${available}`)
	})
	.catch(err => console.log(err))

checkUsernameAvailability("john")
	.then(available => {
		console.log(`Czy nazwa (john) jest dostępna? : ${available}`)
	})
	.catch(err => console.log(err))
