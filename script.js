'use strict'

function kupieniePsa(callback){
    console.log('Pies został kupiony');

    setTimeout(()=>{
        const bark ='Pies pierwszy raz zaszczekał'
        callback(bark)
    },2000)
}

kupieniePsa((result)=>{
console.log(result);
})