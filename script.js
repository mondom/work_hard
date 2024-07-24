"use strict"

function* randomNumberGenerator() {
    while (true) {
        yield Math.floor(Math.random()*10);
    }
}

const generator = randomNumberGenerator();



for (let i = 0; i < 5; i++) {
    console.log(generator.next());
}


