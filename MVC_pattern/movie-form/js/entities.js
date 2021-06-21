var festival = {
    listOfPrograms: [],
    addProgram: function (program) {
        this.listOfPrograms.push(program);
    }
}

///////////////////////////////////////////

function Movie (title, duration, genre) {
    this.title = title;
    this.duration = duration;
    this.genre = genre;
}

Movie.prototype.getFirstAndLastLetter = function () {
    var firstLetter = this.genre[0].toUpperCase();
    var lastLetter = this.genre[this.genre.length - 1].toUpperCase();
    return firstLetter + lastLetter;
}

Movie.prototype.getData = function () {
    return this.title + ', ' + this.duration + ' min, ' + this.getFirstAndLastLetter();
}

/////////////////////////////////////////

function Program (date) {
    this.date = date;
    this.listOfMovies = [];
}

Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
}

Program.prototype.moviesDuration = function () {
    var sumLength = 0;
    this.listOfMovies.forEach (function (element) {
        sumLength += element.duration;
    })
    return sumLength;
}

Program.prototype.getData = function () {
    return this.date + ', ' + this.listOfMovies.length + ' movies, ' + 'duration: ' + this.moviesDuration() + ' min';
}