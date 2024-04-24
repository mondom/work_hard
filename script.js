'use strict'
const test = () => {
	const temp = parseFloat(prompt('Podaj temperaturę w stopniach Celsjusza'))
	// console.log(temp)

	if(temp < -10){
		alert('jest bardzo zimno');
	}else if(temp > -10 && temp <= 0){
		alert('jest zimno');
	}else if (temp >0 && temp <=10){
		alert('jest chłodno');
	}else if(temp > 10 && temp <=20){
		alert('jest ciepło');
	}else if(temp > 20){
		alert('jest gorąco');
	}
	
}



test()
