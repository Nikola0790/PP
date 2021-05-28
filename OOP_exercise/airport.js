'use strict';

(function () {


    function Person (name, surname) {

        if (!name || !surname) {
            throw new Error ('Fields are required')
        }
        this.name = name
        this.surname = surname 
        this.getData = function () {
            return this.name + ' ' + this.surname;
        }
    }

    function Seat (number, category) {

        if (!category) {
            category = 'e';
        }
        if (!number) {
            number = Math.floor(91 * Math.random() + 10);
        }
        if (category !== 'b' && category !== 'e') {
            throw new Error ('Category must be *b* or *e*');
        }
        this.number = number
        this.category = category
        this.getData = function () {
            return this.number + ', ' + this.category;
        }
    }

    function Passenger (person, seat) {

        if (!person || !(person instanceof Person)) {
            throw new Error ('Invalid person input');
        }
        if (!seat || !(seat instanceof Seat)) {
            throw new Error ('Invalid seat input');
        }
        this.person = person
        this.seat = seat
        this.getData = function () {
            return this.seat.getData().toUpperCase() + ', ' + this.person.getData(); 
        }
    }

    function Flight (relation, date) {

        if (!relation || !date) {
            throw new Error ('Fields are required')
        }

        this.relation = relation
        this.date = new Date (date)
        this.listOfPassengers = []
        this.addPassenger = function (passenger) {
            if (!passenger || !(passenger instanceof Passenger)) {
                throw new Error ('Invalid passenger input');
            }
            this.listOfPassengers.push(passenger);        
        }
        this.getData = function () {
            var day = this.date.getDate();
            var month = this.date.getMonth() + 1;
            var year = this.date.getFullYear();
            var result = day + '.' + month + '.' + year + ', ' + this.relation + '\n'; 
            this.listOfPassengers.forEach(function(element) {
                result += '\t\t' + element.getData() + '\n';
            })
            return result;
        }
    }

    function Airport () {

        this.name = 'Nikola Tesla'
        this.listOfFlights = []
        this.addFlight = function (flight) {
            if (!flight || !(flight instanceof Flight)) {
                throw new Error ('Invalid flight input')
            }
            this.listOfFlights.push(flight);
        }
        this.passengerNumber = function () {
            var count = 0;
            this.listOfFlights.forEach (function (flight) {
                count += flight.listOfPassengers.length;
            })
            return count;
        }
        this.getData = function () {
            var result;
            result =  'Airport: ' + this.name + ', total passengers: ' + this.passengerNumber() + '\n';
            this.listOfFlights.forEach(function(pass) {
                result += '\t' + pass.getData();
            });
            return result;
        }
    
    }


    function createFlight (relation, date) {
        return new Flight (relation, date)
    }

    function createPassenger (firstName, lastName, seatNumber, category) {
        var person = new Person (firstName, lastName);
        var seat = new Seat (seatNumber, category);

        return new Passenger (person, seat);
    }



// *******************************************************************************

    var flight_1 = createFlight ('Belgrade-New York', 'Oct 25 2017');
    var flight_2 = createFlight ('Barcelona-Belgrade', 'Nov 17 2017');
    var flight_3 = createFlight ('Belgrade-Paris', 'Oct 26 2017')

    var person_1 = createPassenger ('Nikola', 'Drcalic', 47, 'e');
    var person_2 = createPassenger ('Milan', 'Pavlovic', 9, 'b');
    var person_3 = createPassenger ('Denerys', 'Targeryan', 65);
    var person_4 = createPassenger ('John', 'Snow');
    var person_5 = createPassenger ('John', 'Jones', 79, 'b');
    var person_6 = createPassenger ('Dylan', 'Johnson', 37, 'e');

    flight_1.addPassenger(person_1);
    flight_1.addPassenger(person_2);

    flight_2.addPassenger(person_3);
    flight_2.addPassenger(person_4);
    flight_2.addPassenger(person_5);

    flight_3.addPassenger(person_6);
    
    var airport = new Airport ();

    airport.addFlight(flight_1);
    airport.addFlight(flight_2);
    airport.addFlight(flight_3);

    console.log(airport.getData());

})();