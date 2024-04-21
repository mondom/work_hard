'use strict'

const btn = document.querySelector('.btn')

const askConfirmation = () => {
    const decisionConfim = confirm('Czy na pewno chcesz wykonać tą akcję?')

    if(decisionConfim){
        alert('Twoja decyzja została potwierdzona.')
    }else{
        alert('Twoja decyzja została anulowana.')
    }
}

btn.addEventListener('click', askConfirmation)
