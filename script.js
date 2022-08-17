'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
 count: numberOfFilms,
 movies: {},
 actors: {},
 genres: [],
 privat: false,
};

const answerAboutLastWatchFilm1 = prompt('Один из последних просмотренных фильмов', '');
const answerRatingFilm1 = prompt('На сколько оцените его?', '');
const answerAboutLastWatchFilm2 = prompt('Один из последних просмотренных фильмов', '');
const answerRatingFilm2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[answerAboutLastWatchFilm1] = answerRatingFilm1;
personalMovieDB.movies[answerAboutLastWatchFilm2] = answerRatingFilm2;
