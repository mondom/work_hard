'use strict'

const map = new Map();

const ob1 = { name : "test1" }
const ob2 = { name : "test2" }

map.set(ob1, "koty");
map.set(ob2, "psy");
map.set("[object Object]", "świnki");

console.log(map);
