'use strict';

(function () {

    function Genre (name) {
        if (!name) {
            throw new Error ('Field name are required');
        }
        this.name = name
        this.getData = function () {
            var arr;
            var firstAndLastLetter;
            arr = this.name.split('');
            return firstAndLastLetter = arr[0].toUpperCase() + arr[arr.length - 1].toUpperCase();
        }
    }

    function Movie (title, genre, length){
        if (!title || !genre || !length || typeof length !== 'number') {
            throw new Error ('Fields title, genre, length are required and length must be number');
        }
        this.title = title
        this.genre = genre
        this.length = length
        this.getData = function () {
            return this.title + ', ' + this.length + 'min, ' + this.genre.getData();
        }
    }

    function Program (date) {
        if (!date) {
            throw new Error ('Field date are required');
        }
        this.date = new Date(date)
        this.totalNumOfMovies = 0
        this.listOfMovies = []
        var countLength = 0;
        var genreAction = 0;
        var genreComedy = 0;
        var genreDrama = 0;
        var genreFantasy = 0;
        var genreHorror = 0;
        var genreMystery = 0;
        var genreRomance = 0;
        var genreThriller = 0; 
        this.addMovie = function (movie) {
            if (!movie || !(movie instanceof Movie)) {
                throw new Error ('Invalid movie input')
            }
            if (movie.genre.name === 'Action') {
                genreAction ++;
            } else if (movie.genre.name === 'Comedy') {
                genreComedy ++;
            } else if (movie.genre.name === 'Drama') {
                genreDrama ++;
            } else if (movie.genre.name === 'Fantasy') {
                genreFantasy ++;
            } else if (movie.genre.name === 'Horror') {
                genreHorror ++;
            } else if (movie.genre.name === 'Mystery') {
                genreMystery ++;
            } else if (movie.genre.name === 'Romance') {
                genreRomance ++;
            } else if (movie.genre.name === 'Thriller') {
                genreThriller ++;
            }
            // Added check for length movie program. If length for all movie higher than 480, movie aren't be add on list. Also added check for movie genre, if movie program have more from 4 for same genre, next movie isn't be added on list
            countLength += movie.length;                                                    
            if (countLength < 480) {   
                if ((movie.genre.name === "Action") && genreAction < 5) {
                    this.listOfMovies.push(movie);
                } else if ((movie.genre.name === "Comedy") && genreComedy < 5) {
                    this.listOfMovies.push(movie);
                } else if ((movie.genre.name === "Drama") && genreDrama < 5) {
                    this.listOfMovies.push(movie);
                } else if ((movie.genre.name === "Fantasy") && genreFantasy < 5) {
                    this.listOfMovies.push(movie);
                } else if ((movie.genre.name === "Horror") && genreHorror < 5) {
                    this.listOfMovies.push(movie);
                } else if ((movie.genre.name === "Mystery") && genreMystery < 5) {
                    this.listOfMovies.push(movie);
                } else if ((movie.genre.name === "Romance") && genreRomance < 5) {
                    this.listOfMovies.push(movie);
                } else if ((movie.genre.name === "Thriller") && genreThriller < 5) {
                    this.listOfMovies.push(movie);
                }                                                                                      
            }
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
        if (!name) {
            throw new Error ('Field name are required');
        }
        this.name = name
        this.numberOfMovies = 0
        this.listOfPrograms = []
        this.addProgram = function (program) {
            if (program === undefined) {                                // If there are no programs added to the festival, program === undefined.
                this.getData = function () {
                    return this.name + '\n\tProgram to be announced';
                }
            }
            else if (!program || !(program instanceof Program)) {
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

    // **********************************************************************************

    try {
        var festival_1 = new Festival ('Weekend festival');

        var program_1 = createProgram ('10 28 2017');
        var program_2 = createProgram ('10 29 2017');

        var movie_1 = createMovie ('Spider-Man: Homecoming', 133, 'Action');
        var movie_2 = createMovie ('War for the Planet of the Apes', 140, 'Drama');
        var movie_3 = createMovie ('The Dark Tower', 95, 'Fantasy');
        var movie_4 = createMovie ('Deadpool', 108, 'Comedy');
        var movie_5 = createMovie ('Tom and Jerry', 85, 'Comedy');
        var movie_6 = createMovie ('Titanic', 85, 'Drama');
        var movie_7 = createMovie ('The Dark Tower 2', 95, 'Fantasy');
        var movie_8 = createMovie ('The man who invented christmas', 90, 'Drama');

        program_1.addMovie(movie_1);
        program_1.addMovie(movie_2);
        program_1.addMovie(movie_3);
        program_1.addMovie(movie_6);
        program_1.addMovie(movie_7);
        program_1.addMovie(movie_8);

        program_2.addMovie(movie_4);
        program_2.addMovie(movie_5);
        program_2.addMovie(movie_8);
        

        festival_1.addProgram(program_1);
        festival_1.addProgram(program_2);

        console.log(festival_1.getData());

    } catch (error) {
        console.log('Error message ' + error.message);
    }

})();