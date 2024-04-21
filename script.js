const favoritePlace = 'Góry'
let isAvailable = false

const availablePlace = 'Góry'

if(favoritePlace === availablePlace){
    isAvailable = true;
}

if(isAvailable) {
    console.log(`Moje ulubione miejsce wypoczynkowe jest dostępne!`);
}else{
    console.log(`Moje ulubione miejsce wypoczynkowe nie jest dostępne!`);
}

if(!favoritePlace){
    console.log(`Błąd! Nie podano ulubionego miejsca!`);
}

const secretKey = Symbol('klucz dostępu')

if(favoritePlace === secretKey){
    console.log(`Błąd! Nie masz dostepu!`);
}