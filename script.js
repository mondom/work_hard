'use strict'

const favoriteMovies = new Set()

favoriteMovies.add("Incepcja");
favoriteMovies.add("Interstellar");
favoriteMovies.add("Prestiz");

console.log('Moje ulubione filmy:');
for(const movie of favoriteMovies){
	console.log(movie);
}
favoriteMovies.clear('Incepcja')
console.log('Brak:');
for(const movie of favoriteMovies){
	console.log(movie);
}
