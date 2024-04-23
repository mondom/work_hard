'use strict'
const test = (number) => {

	if(isNaN(number)){
		console.log('Podana wartość nie jest liczbą');
	}else if(!isFinite(number)){
		console.log('Podana wartość jest nieskończona');
	} else{
		console.log('Podana wartość jest prawidłową liczbą');
	}
	
}
test(null)

console.log(null);
