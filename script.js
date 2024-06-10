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

//setTimeout i click trafią do kolejki zadań
setTimeout(() => {
  console.log("Jestem tekstem z setTimeout A");
}, 0);

setTimeout(() => {
  console.log("Jestem tekstem z setTimeout B");
}, 0);

//rejestruję klikanie na dokumencie
document.addEventListener("click", () => {
  console.log("klik");
});

//pętla trwająca 3 sekundy
//kod synchroniczny - jako pierwszy trafi do Call Stack
let start = new Date().getTime();
let end = start;
while(end < start + 3000) {
  end = new Date().getTime();
}

console.log("Jestem tekstem ze zwykłego console.log");

  
  


