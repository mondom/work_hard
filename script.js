'use strict'

const user = {
    name: 'Klaudia',
    age: 25,
    sex: 'female',
    'hair-kolor':'blonde'
}

for(const data in user){
    // console.log(data);
    console.log(user[data]);
}