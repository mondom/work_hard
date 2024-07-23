"use strict"

function delay(ms){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve()
        },ms)
    })
}

const tasks = [
    "Przygotuj sniadanie",
    "Umyj naczynia",
    "Posprzataj pokoj",
    "Obejrzyj ulubiony film",
    "Przeczytaj ksiazke",
];
