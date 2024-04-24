'use strict'
const test = () => {

	const age = 18
	const adult = 18
	const status = age >= adult ? true : false
	// console.log(status);

	if(status){
		console.log('Jesteś pełnoletni!');
	}else {
		console.log('Nie jesteś pełnoletni');
	}
} 

test()
