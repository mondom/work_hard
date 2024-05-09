'use strict'

const Player = function (nick, email) {
	// konstruktor
	this.nick = nick
	this.email = email
	this.shoot = () => console.log('SHOOT!!!')
}

Player.prototype.login = () => console.log('Jestem zalogowany!')
Player.prototype.logout = () => console.log('Jestem wylogowany!')
Player.prototype.moveLeft = () => console.log('Idę w lewo!')
Player.prototype.moveRight = () => console.log('Idę w prawo!')

const Player1 = new Player('Dragon', 'janek@example.com')
const Player2 = new Player('Fenix', 'john@example.com')
const Player3 = new Player('Kmaikadze', 'tom@example.com')
console.log(Player1);
