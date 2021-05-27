'use strict';

(function () {

    function Genre (name) {
        this.name = name
        this.getData = function () {
            var arr;
            var firstAndLastLetter;
            arr = this.name.split('');
            return firstAndLastLetter = arr[0].toUpperCase() + arr[arr.length - 1].toUpperCase();
        }
    }

    function Movie (title, genre, length){
        this.title = title
        this.genre = genre
        this.length = length
        this.getData = function () {
            return this.title + ', ' + this.length + 'min, ' + this.genre.getData();
        }
    }

    function Program (date) {
        this.date = new Date(date)
        this.totalNumOfMovies = 0
        this.listOfMovies = []
        this.addMovie = function (movie) {
            if (!movie || !(movie instanceof Movie)) {
                throw new Error ('Invalid movie input')
            }
            this.listOfMovies.push(movie);
        }
        this.totalNumOfMovies = function () {
            return this.listOfMovies.length;
        }
        this.getData = function () {
            var year = this.date.getFullYear();
            var month = this.date.getMonth() + 1;
            var day = this.date.getDate();
            var count = 0;
            var movieLength = '\t' + day + '.' + month + '.' + year + ', program duration ';
            this.listOfMovies.forEach(function (mov) {
                count += mov.length;
            }) 
            movieLength += count + 'min';
            this.listOfMovies.forEach(function (element) {
                movieLength += '\n\t\t' + element.getData();
                return movieLength;
            }) 
            return movieLength;
        }
    }

    function Festival (name) {
        this.name = name
        this.numberOfMovies = 0
        this.listOfPrograms = []
        this.addProgram = function (program) {
            if (!program || !(program instanceof Program)) {
                throw new Error ('Invalid program input')
            }
            this.listOfPrograms.push(program)
        }
        this.numberOfMovies = function () {
            var sum = 0;
            this.listOfPrograms.forEach(function (movie) {
                sum += movie.totalNumOfMovies();
            });
            return sum;
        }
        this.getData = function () {
            var programFestival = this.name + ' has ' + this.numberOfMovies() + ' movie titles \n'; 
            this.listOfPrograms.forEach(function(element) {
                programFestival += element.getData() + '\n';
            })
            return programFestival;
        }
    }

    function createMovie (movieTitle, movieLength, movieGenre) {
        var genre = new Genre (movieGenre);
        var movie = new Movie (movieTitle, genre, movieLength);

        return movie;
    }

    function createProgram (date) {
        var program = new Program (date);
        return program;
    }


    var festival_1 = new Festival ('Weekend festival');

    var program_1 = createProgram ('10 28 2017');
    var program_2 = createProgram ('10 29 2017');

    var movie_1 = createMovie ('Spider-Man: Homecoming', 133, 'Action');
    var movie_2 = createMovie ('War for the Planet of the Apes', 140, 'Drama');
    var movie_3 = createMovie ('The Dar Tower', 95, 'Adventure');
    var movie_4 = createMovie ('Deadpool', 108, 'Comedy');
    var movie_5 = createMovie ('Tom and Jerry', 85, 'Cartoon');

    program_1.addMovie(movie_1);
    program_1.addMovie(movie_2);
    program_1.addMovie(movie_3);
    program_2.addMovie(movie_4);
    program_2.addMovie(movie_5);

    festival_1.addProgram(program_1);
    festival_1.addProgram(program_2);

    console.log(festival_1.getData());

})();