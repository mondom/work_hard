'use strict'

const employee1 = { id: 1, firstName: 'John', lastName: 'Doe' }
const employee2 = { id: 2, firstName: 'Jane', lastName: 'Smith' }

const employeeMap = new WeakMap()

employeeMap.set(employee1, { position: 'Manager', salary: 5000 })
employeeMap.set(employee2, { position: 'Developer', salary: 4000 })

console.log(`Sprawdzanie danych pracownika:`)
if (employeeMap.has(employee1)) {
	console.log(`Mapa posiada dane pracownika nr 1`)
} else {
	console.log(`Mapa nie posiada danych pracownika nr 1`)
}

