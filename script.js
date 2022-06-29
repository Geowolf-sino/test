const numberOfFilms = +prompt("How many films did you watch?", "");

const personalMOvieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}


const a = prompt('one watched films', "");
b = prompt('how rating films', '');
c = prompt('one watched films', "");
d = prompt('how rating films', '');

personalMOvieDB.movies[a] = b;
personalMOvieDB.movies[c] = d;

console.log(personalMOvieDB);