'use strict'

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const calculateSum = arr => {
// 	if (arr.length === 0) {
// 		return 0
// 	}
//     console.log(arr);

// 	let firstElement = arr[0]
// 	let sum = 0

// 	if (firstElement > 5) {
// 		sum += firstElement
// 	}
    

// 	let remainingArray = arr.slice(1)
//     const recursiveSum = calculateSum(remainingArray)
// 	sum += recursiveSum
//     return sum
// }

// const result = calculateSum(arr)
// console.log(result);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const calculateSum = arr => {
    return arr.reduce((sum, current) => {
        if (current > 5) {
            console.log('suma: '+sum);
            console.log('obecna liczba: '+current);
            return sum + current;

        }
        return sum;
    }, 0);
};

const result = calculateSum(arr);
console.log(result); // Wyświetla sumę elementów większych niż 5
