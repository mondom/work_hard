'use strict'

class Player {
	constructor(nick, mail) {
		this.nick = nick
		this.mail = mail
	}
	shoot() {
		console.log('SHOOT!!!')
	}
	login() {
		console.log('Jestem zalogowany!')
	}
	logout() {
		console.log('Jestem wylogowany!')
	}
	moveLeft() {
		console.log('Idę w lewo!')
	}
	moveRight() {
		console.log('Idę w prawo!')
	}
}

const Player1 = new Player('Dragon', 'janek@example.com')
const Player2 = new Player('Fenix', 'john@example.com')
const Player3 = new Player('Kmaikadze', 'tom@example.com')

console.log(Player1);
Player1.shoot()

class Leader extends Player{
	constructor(nick,mail,team){
		super(nick,mail)
		this.team = team
	}
	jump(){
		console.log('Mogę skakać!');
	}
	invite(nick){
		console.log(`${nick}, zapraszam Cię do mojego zespołu`);
	}
}

const vip = new Leader('Pablo','pablo@vp.pl','gladiators')

console.log(vip);
vip.invite('Boo')
vip.jump()