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

const employee1Data = employeeMap.get(employee1)
console.log(`Informacje o pracowniku nr 1:`);
console.log('ID: ' + employee1.id);
console.log('Imię: ' + employee1.firstName);
console.log('Nazwisko: ' + employee1.lastName);
console.log('Stanowisko: ' + employee1Data.position);
console.log('Wynagrodzenie: ' + employee1Data.salary);

employeeMap.delete(employee2)

console.log('Sprawdzanie danych dla usuniętego pracownika');
if(employeeMap.has(employee2)){
	console.log('to źle');
}else{
	console.log('Brak danych pracownika nr 2');
}