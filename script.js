const numberOfFilms = +prompt("How many films did you watch?", "");

const personalMOvieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}



for(let i = 0; i < 2; i++) {
    const a = prompt('one watched films', "");
    b = prompt('how rating films', '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMOvieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

    
}
console.log(personalMOvieDB);