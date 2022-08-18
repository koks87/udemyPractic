'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
 count: numberOfFilms,
 movies: {},
 actors: {},
 genres: [],
 privat: false,
};

// **** Вариант 1 цикл "FOR" ****
for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов', '');
    const b = +prompt('На сколько оцените его?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');  
   }  else {
        console.log('error');
        i--;
   }
}

// **** Вариант 2 цикл "WHILE" ****
/* let i = 0;
while ( i < 2){
const a = prompt('Один из последних просмотренных фильмов','');
const b = +prompt('На сколько оцените его?','');
if (a != null && b != null && a != '' && b != '' && a.length < 50){
    personalMovieDB.movies[a] = b;
    i++;
    console.log('good data');
} else{
    console.log('bad data');
}
} */

// **** Вариант 3 цикл "DO WHILE" ****
/* let i = 0;
do{
    const a = prompt('Один из последних просмотренных фильмов','');
    const b = prompt('На сколько оцените его?','');
    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('good data');
        i++;
    } else {
        console.log('bad data');
    }
} while (i < 2); */



if(personalMovieDB.count < 10){
    alert('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30){
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
} 

console.log(personalMovieDB);