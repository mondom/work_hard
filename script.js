'use strict'

const schedule = []

schedule.unshift('Spotkanie z klientem')
schedule.unshift('Prezentacja projektu')
schedule.unshift('Zespol stand-up')
schedule.unshift('Lunch z kolegami')

console.log(schedule)

schedule.shift()
console.log(schedule)
