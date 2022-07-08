const numberOfFilms = +prompt("How many films did you watch?", "");

const personalMOvieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}



for(let i = 0; i < 1; i++) {
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
if (personalMOvieDB.count < 10){
    console.log('few movies watched')
} else if (personalMOvieDB.count >= 10 && personalMOvieDB.count < 30) {
    console.log('You are classic viewer');
} else if (personalMOvieDB.count >= 30) {
    console.log('You are cinephile')
} else {
    console.log('An error has occured')
}

console.log(personalMOvieDB);