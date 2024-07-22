"use strict"

function fetchData() {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		resolve("Dane zostały pobrane");
	  }, 1000);
	});
  }
  
  function anotherFetch() {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		resolve("Dodatkowe dane zostały pobrane");
	  }, 1000);
	});
  }
  
  fetchData()
	.then(data => {
	  console.log(data);
	  return anotherFetch();
	})
	.then(moreData => {
	  console.log(moreData);
	})
	.catch(error => {
	  console.error("Wystąpił błąd:", error);
	});


	async function fetchData() {
		return new Promise((resolve, reject) => {
		  setTimeout(() => {
			resolve("Dane zostały pobrane");
		  }, 1000);
		});
	  }
	  
	  async function anotherFetch() {
		return new Promise((resolve, reject) => {
		  setTimeout(() => {
			resolve("Dodatkowe dane zostały pobrane");
		  }, 1000);
		});
	  }
	  
	  async function fetchAllData() {
		try {
		  const data = await fetchData();
		  console.log(data);
		  const moreData = await anotherFetch();
		  console.log(moreData);
		} catch (error) {
		  console.error("Wystąpił błąd:", error);
		}
	  }
	  
	  fetchAllData();