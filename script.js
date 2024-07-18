"use strict"

const promise1 = new Promise((resolve,reject)=>{
	setTimeout(resolve, 500, 'Pierwsza')
})
const promise2 = new Promise((resolve,reject)=>{
	setTimeout(reject, 1500, 'Błąd w drugiej')
})
const promise3 = new Promise((resolve,reject)=>{
	setTimeout(resolve, 1000, 'Trzecia')
})

Promise.all([promise1,promise2,promise3]).then(values => console.log(values)).catch(err => {console.log(err)})