'use strict'

const countDown = num => {
    if (num <= 0) {
        console.log('Liczenie zakończone!');
        return;
    } else {
        console.log(num);
        countDown(num - 1);
    }
}

countDown(5);
