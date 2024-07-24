"use strict"

function test(){}

(async () => {
    //próbuję wykonać jakieś operacje
    try {
        const request = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const json = await request.json();
        console.log(json)
    //jeżeli się nie uda, zwracam błąd
    } catch(err) {
        console.log(err);
    }
})();


