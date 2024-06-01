'use strict'

// const set = new Set();

// set.add(1);
// set.add("text");
// set.add({name: "kot"});

// console.log(set); 

// const set1 = new Set([1, 1, 2, 2, 3, 4]); 

// console.log(set1);

// const set2 = new Set("kajak"); 

const tab = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 5];

const set = new Set(tab);
console.log(set); //{1, 2, 3, 4, 5}

const uniqueTab = [...set];
console.log(uniqueTab); //[1, 2, 3, 4, 5]