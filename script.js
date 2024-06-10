'use strict'

// const calculateFactorial = num => {
// 	if (num === 0 || num === 1) {
// 		return 1
// 	}

// 	let factorial = calculateFactorial(num - 1)
// 	console.log(num);
// 	factorial *= num
// 	return factorial
// }

// let num = 5

// const result = calculateFactorial(num)

// console.log('Silnia liczby', num, 'to:', result)

function f1() {
	console.log( 'f1' );
  }
	
  function f2() {
	f1();
	console.log( 'f2' );
  }
	
  f2();


  
  


