'use strict';

(function (){


    class Genre {
        constructor (name) {
            this.name = name;
            this.getData = function () {
                let arr;
                let firstAndLastLetter;
                arr = this.name.split('');
                return firstAndLastLetter = arr[0].toUpperCase() + arr[arr.length - 1].toUpperCase();
            }
        }
    }

    class Movie {
        constructor (title, genre, length) {
            this.title = title
            this.genre = genre
            this.length = length
            this.getData = function () {
                return `${this.title}, ${this.length} min, ${this.genre.getData()}`;
            }
        }
    }

    class Program {
        constructor (date) {
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
                let year = this.date.getFullYear();
                let month = this.date.getMonth() + 1;
                let day = this.date.getDate();
                let count = 0;
                let movieLength = `${day}. ${month}. ${year}, program duration `;
                this.listOfMovies.forEach(function (mov) {
                    count += mov.length;
                }) 
                movieLength += `${count} min`;
                this.listOfMovies.forEach(function (element) {
                    movieLength += `
        ${element.getData()}`;
                    return movieLength;
                }) 
                return movieLength;
            }
        }
    } 

    class Festival {
        constructor (name) {
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
                let sum = 0;
                this.listOfPrograms.forEach(function (movie) {
                    sum += movie.totalNumOfMovies();
                });
                return sum;
            }
            this.getData = function () {
                let programFestival = `${this.name} has ${this.numberOfMovies()} movie titles`; 
                this.listOfPrograms.forEach(function(element) {
                    programFestival += `
    ${element.getData()}`;
                })
                return programFestival;
            }
        }
    } 


    let fest = new Festival ('BLABLA')
    let x = new Genre ('Drama');
    let y = new Movie ('Citizen Kane', x, 85);
    let c = new Program ('10 05 2015')

    c.addMovie(y)
    fest.addProgram(c);
    
    //console.log(y.getData());
    //console.log(c.getData());
    console.log(fest.getData());

})();