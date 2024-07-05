'use strict'

function fetchData() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const success = true; // Zmień na false, aby przetestować scenariusz błędu
          if (success) {
              console.log('Dane pobrane');
              resolve([1, 2, 3, 4, 5]);
          } else {
              reject(new Error('Błąd podczas pobierania danych'));
          }
      }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const success = true; // Zmień na false, aby przetestować scenariusz błędu
          if (success) {
              console.log('Dane przetworzone');
              resolve(data.map(item => item * 2));
          } else {
              reject(new Error('Błąd podczas przetwarzania danych'));
          }
      }, 1000);
  });
}

function displayData(data) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const success = true; // Zmień na false, aby przetestować scenariusz błędu
          if (success) {
              console.log('Dane wyświetlone:', data);
              resolve();
          } else {
              reject(new Error('Błąd podczas wyświetlania danych'));
          }
      }, 1000);
  });
}

// Promise Chaining z obsługą błędów
fetchData()
  .then(data => {
      return processData(data);
  })
  .then(processedData => {
      return displayData(processedData);
  })
  .then(() => {
      console.log('Wszystkie operacje zakończone pomyślnie');
  })
  .catch(error => {
      console.error('Błąd:', error.message);
  });
