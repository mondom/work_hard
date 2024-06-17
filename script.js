'use strict'

function zmienSwiatloPieszych(stan) {
	console.log("Stan sygnalizatora dla pieszych:", stan);
}

function zmienSwiatloPojazdow(stan) {
	console.log("Stan sygnalizatora dla pojazdów:", stan);
}

const czasZielonegoPojazdow = 5000;
const czasCzerwonegoPieszych = 3000;
const czasZielonegoPieszych = 2000;

let stanSwiatlaPojazdow = "czerwony";
let stanSwiatlaPieszych = "czerwony";

zmienSwiatloPojazdow.call(null, stanSwiatlaPojazdow);

function zmienStanSwiatel() {
	if (stanSwiatlaPojazdow === "czerwony") {
		stanSwiatlaPojazdow = "zielony";
	} else if (stanSwiatlaPojazdow === "zielony") {
		stanSwiatlaPojazdow = "czerwony";
	}

	if (stanSwiatlaPieszych === "czerwony") {
		stanSwiatlaPieszych = "zielony";
	} else if (stanSwiatlaPieszych === "zielony") {
		stanSwiatlaPieszych = "żółty";
	} else if (stanSwiatlaPieszych === "żółty") {
		stanSwiatlaPieszych = "czerwony";
	}

	zmienSwiatloPojazdow.call(null, stanSwiatlaPojazdow);
	zmienSwiatloPieszych.call(null, stanSwiatlaPieszych);
}

setInterval(zmienStanSwiatel, czasZielonegoPojazdow);
