'use strict'

let PlayerProto = {
	login: () => console.log("Jestem zalogowany!"),
	logout: () => console.log("Jestem wylogowany!"),
  };
   
  // tylko prototyp
  let Player4 = Object.create(PlayerProto);
  Player4.nick = "AngryBird";
  Player4.mail = "max@example.com";
   
  // prototyp plus property - musimy podawać to w sposób { property: {value: "wartość property"} }
  let Player5 = Object.create(PlayerProto, {
	nick: { value: "Joker" },
	email: { value: "andrew@example.com" },
  });
  console.log(Player4);
  console.log(Player5);
