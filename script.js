'use strict'

const getValue = (optionalValue, defaultValue) => {
	return optionalValue ?? defaultValue
}

let value = getValue('wartość opcjonalna', 'wartość domyślna')
console.log(value);


