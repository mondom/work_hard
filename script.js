'use strict'

// function fetchData() {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           const success = true; // Zmień na false, aby przetestować scenariusz błędu
//           if (success) {
//               console.log('Dane pobrane');
//               resolve([1, 2, 3, 4, 5]);
//           } else {
//               reject(new Error('Błąd podczas pobierania danych'));
//           }
//       }, 1000);
//   });
// }

// function processData(data) {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           const success = true; // Zmień na false, aby przetestować scenariusz błędu
//           if (success) {
//               console.log('Dane przetworzone');
//               resolve(data.map(item => item * 2));
//           } else {
//               reject(new Error('Błąd podczas przetwarzania danych'));
//           }
//       }, 1000);
//   });
// }

// function displayData(data) {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           const success = true; // Zmień na false, aby przetestować scenariusz błędu
//           if (success) {
//               console.log('Dane wyświetlone:', data);
//               resolve();
//           } else {
//               reject(new Error('Błąd podczas wyświetlania danych'));
//           }
//       }, 1000);
//   });
// }

// // Promise Chaining z obsługą błędów
// fetchData()
//   .then(data => {
//       return processData(data);
//   })
//   .then(processedData => {
//       return displayData(processedData);
//   })
//   .then(() => {
//       console.log('Wszystkie operacje zakończone pomyślnie');
//   })
//   .catch(error => {
//       console.error('Błąd:', error.message);
//   });

function fetchNumbers() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Podaję liczby do analizy')
			resolve([2, 4, 6])
		}, 1000)
	})
}

function count(numbers) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Wykonuję obliczenia')
			resolve(
				numbers.reduce((acc, curr) => {
					return acc + curr
				})
			)
		}, 1000)
	})
}
function showResult(result) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (result >= 0 && result <= 12) {
				resolve(
					console.log(`Otrzymany wynik to: ${result}`)
					
				)
			} else {
				reject(new Error('Wynik jest nieprawidłowy - zmień zakres.'))
			}
		}, 1000)
	})
}

fetchNumbers().then(num => {
	return count(num)
}).then(result => {
  return showResult(result)
}).catch(err => {
  console.error(err);
})
