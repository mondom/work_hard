'use strict'

function getUsersFromDatabase(callback) {
	setTimeout(() => {
		const users = [
			{ id: 1, name: 'Jan Kowalski' },
			{ id: 2, name: 'Anna Nowak' },
			{ id: 3, name: 'Piotr Wisniewski' },
		]
		callback(users)
	}, 2000)
}

function getEmail(userID, callback) {
	setTimeout(() => {
		let email = userID + '@example.com'
		callback(email)
	}, 2000)
}

function mainFunction() {
	getUsersFromDatabase(users => {
		console.log(users)
        users.forEach(user => {
            getEmail(user.id, (email)=>{
                console.log(`Uzytkownik ${user.name} ma adres e-mail: ${email}`);
            })
        })
	})
}

mainFunction()