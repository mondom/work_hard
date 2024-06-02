'use strict'

const usersSet = new WeakSet()

const user1 = { id: 1 }
const user2 = { id: 2 }
const user3 = { id: 3 }

const trackUserActivity = (user, action) => {
	if (!usersSet.has(user)) {
		usersSet.add(user)
	}

	user.activityCount = (user.activityCount || 0) + 1

	console.log(`Użytkownik o id ${user.id} wykonał ${user.activityCount} akcje: ${action}`);
}

trackUserActivity(user1, 'klikniecie na przycisk')
trackUserActivity(user2, 'przesuniecie suwaka')
trackUserActivity(user1, 'wyslanie formularza')
trackUserActivity(user3, 'klikniecie na link')
