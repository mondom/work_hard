'use strict'

const map = new Map();

const ob1 = { name : "test1" }
const ob2 = { name : "test2" }

map.set(ob1, "koty");
map.set(ob2, "psy");
map.set("[object Object]", "świnki");

console.log(map);


const map2 = {}

const ob12 = { name : "test1" }
const ob22 = { name : "test2" }

map2[ob1] = "koty";
map2[ob2] = "psy"; //ob2 skonwertowany na "[object Object]"
map2["[object Object]"] = "świnki";

console.log(map2); //{"[object Object]": "świnki"}

// do analizy na świeżo...