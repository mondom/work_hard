'use strict'

class Person {
	constructor(name, email) {
	  // property są tworzone tutaj - wewnątrz metody 'constructor'
	  // są one bezpośrednio dołączone do instancji klasy
	  this.name = name;
	  this.email = email;
	}
   
	// metody są tworzone tutaj - bezpośrednio w ciele klasy
	// są one dostępne jako 'prototype'
	login() {
	  console.log(this.name, "własnie się zalogował");
	}
   
	logout() {
	  console.log(this.name, "własnie się wylogował");
	}
  }
   
  const Mario = new Person("Mario", "mario@example.com");
  const Luigi = new Person("Luigi", "luigi@example.com");
