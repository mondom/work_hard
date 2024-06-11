'use strict'

let stack = []

function pushName(name) {
  stack.push(name)
}

function popName() {
 return stack.pop()
}

function peekName() {
  console.log(stack[stack.length -1]);
}

pushName('Monika')
pushName('Hanna')
pushName('Ewelina')

console.log(stack);


const result2 = popName()
console.log(result2)
const result3 = peekName()
console.log(result3)


