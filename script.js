"use strict"

function fetchDataWithTimeout(url, timeout) {
	const fetchPromise = fetch(url).then(response => response.json());
	const timeoutPromise = new Promise((resolve, reject) => {
	  setTimeout(() => {
		reject(new Error('Request timed out'));
	  }, timeout);
	});
  
	return Promise.race([fetchPromise, timeoutPromise]);
  }
  
  fetchDataWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 3000)
	.then(data => console.log(data))
	.catch(error => console.error(error));