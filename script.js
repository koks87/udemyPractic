'use strict';

/* function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели", '');

    while (numberOfFilms === "" || numberOfFilms === null || isNaN(numberOfFilms) || numberOfFilms === 0) {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели", '');
    }
} */

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели", '');
    
        while (personalMovieDB.count === "" || personalMovieDB.count === null || isNaN(personalMovieDB.count) || personalMovieDB.count === 0) {
            personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели", '');
        }
    },
    toogleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
    writeYourGenres: function (){  
     for (let i = 1; i < 2; i++){
       /*  let genresOfFilms = prompt(`Ваш любимый жанр под номером ${i}`,'');
        if (genresOfFilms === "" || genresOfFilms === null){
            i--;
        } else {
            personalMovieDB.genres.push(genresOfFilms); 
        } */
        let genresOfFilms = prompt(`Введите Ваши любимые жанры через запятую`).toLowerCase();
        if (genresOfFilms === "" || genresOfFilms === null){
            console.log('Вы ввели не корректные данные');
            i--;
        } else {
            personalMovieDB.genres = genresOfFilms.split(', '); 
            personalMovieDB.genres.sort();
        }
    }
    personalMovieDB.genres.forEach((el, index) => console.log(`Любимый жанр ${index + 1} - это ${el}`));
},
    rememberMyFilms: function () {
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов', '').trim();
        const b = +prompt('На сколько оцените его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');  
       }  else {
            console.log('error');
            i--;
       }
    }
},
    detectPersonalLevel: function (){
    if(personalMovieDB.count < 10){
        console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30){
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    } 
},
    showMyDB: function (db){
    if (db.privat) {
        return console.log(db);
    }
},
   };

 /* function rememberMyFilms() {
    // **** Вариант 1 цикл "FOR" ****
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов', '').trim();
        const b = +prompt('На сколько оцените его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');  
       }  else {
            console.log('error');
            i--;
       }
    }*/
    
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
    
//};
personalMovieDB.start();  
personalMovieDB.rememberMyFilms();

/* function detectPersonalLevel(){
        if(personalMovieDB.count < 10){
            alert('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30){
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        } 
}; */
personalMovieDB.detectPersonalLevel();

/* function writeYourGenres(){
    let genresOfFilms;  
     for (let i = 1; i <= 3; i++){
        genresOfFilms = prompt(`Ваш любимый жанр под номером ${i}`,'');
        if (genresOfFilms === "" || genresOfFilms === null){
            i--;
        } else {
            personalMovieDB.genres.push(genresOfFilms); 
        }
    }
}; */

personalMovieDB.writeYourGenres();
personalMovieDB.toogleVisibleMyDB();

/* function showMyDB(db){
    if (db.privat) {
        return console.log(db);
    }
}; */

personalMovieDB.showMyDB(personalMovieDB);