'use strict';

(function () {

    function Country (name, odds, continet) {

        this.name = name
        this.odds = odds
        this.continet = continet
    }

    function Person (name, surname, dateOfBirth) {

        this.name = name
        this.surname = surname
        this.dateOfBirth = new Date(dateOfBirth) 
        this.today = new Date()
        this.personYears = this.today.getFullYear() - this.dateOfBirth.getFullYear()
        this.getData = function () {

            var day = this.dateOfBirth.getDate();
            var month = this.dateOfBirth.getMonth() + 1;
            var year = this.dateOfBirth.getFullYear();

            return this.name + ' ' + this.surname + ' ' + day + '.' + month + '.' + year;
        }
    }

    function Player (person, betAmount, country) {

        this.person = person
        this.betAmount = betAmount
        this.country = country
        this.getData = function () {
            return this.country.name.slice(0, 2).toUpperCase() + ', ' + this.country.odds * this.betAmount + 'eur' + ', ' + this.person.name + ' ' + this.person.surname + ', ' + this.person.personYears + ' years';
        }
    }

    function Address (country, city, postalCode, street, number) {

        this.country = country
        this.city = city
        this.postalCode = postalCode
        this.street = street
        this.number = number
        this.abbreviationForCountry = this.country.slice(0, 2).toUpperCase();
        this.getData = function () {
            return this.street + ' ' + this.number + ', ' + this.postalCode + ' ' + this.city + ', ' + this.abbreviationForCountry;
        }
    }

    function BettingPlace (address) {

        this.address = address
        this.listOfPlayers = []
        this.addPlayer = function (player) {
            if (!player || !(player instanceof Player)) {
                throw new Error ('Invalid player input')
            }
            this.listOfPlayers.push(player);
        }
        this.getData = function () {
            var sum = 0;
            var result; 
            this.listOfPlayers.forEach(function (player) {
                sum += (player.country.odds * player.betAmount);
            })
            result = this.address.street + ', ' + this.address.postalCode + ' ' + this.address.city + ', sum of all bets: ' + sum + 'eur';
            return result;
        }
    }

    function BettingHouse (competition) {

        this.competition = competition
        this.listOfBettingPlace = []
        //this.numberOfPlayers = 0                
        this.addBettingPlaces = function (place) {
            if (!place || !(place instanceof BettingPlace)) {
                throw new Error ('Invalid place input')
            }
            this.listOfBettingPlace.push(place);
        }
        this.numberOfBets = function () {
            var count = 0;
            this.listOfBettingPlace.forEach(function(bet) {
                count += bet.listOfPlayers.length;
            })
            return count;
        }
        this.getData = function () {
            var result = this.competition + ', ' + this.listOfBettingPlace.length + ' betting places, ' + this.numberOfBets() + ' bets \n';
            /*this.listOfBettingPlace.forEach(function (betPl) {
                result += '\t' + betPl.getData() + '\n';
            })
            this.listOfBettingPlace.forEach(function(el){
                el.listOfPlayers.forEach(function(podatak) {
                    result += podatak.getData() + '\n';
                })
            })
            return result;*/
            for (var i = 0; i < this.listOfBettingPlace.length; i++) {
                result += '\t' + this.listOfBettingPlace[i].getData() + '\n';
                for (var j = 0; j < this.listOfBettingPlace[i].listOfPlayers.length; j++) {   
                    result += '\t\t' + this.listOfBettingPlace[i].listOfPlayers[j].getData() + '\n';
                }
            }
            return result;
        }
    }

    var continets = {
        ASIA: 'AS',
        AUSTRALIA: 'AU',
        AFRICA: 'AF',
        EUROPA: 'EU',
        NORTH_AMERICA: 'NA',
        SOUTH_AMERICA: 'SA'
    }

    function createPlayer (name, surname, dateOfBirth, countryName, odds, continent, betAmount) {
        
        var person = new Person (name, surname, dateOfBirth);
        var country = new Country (countryName, odds, continent);
        var betMoney = betAmount;

        return new Player (person, betMoney, country);
    }

    function createBettingPlace (country, city, postalCode, street, number) {

        var place = new Address (country, city, postalCode, street, number);

        return new BettingPlace (place);
    }


    // *************************************************************************************


    var house = new BettingHouse ('FIFA World Cup 2022');

    var player_1 = createPlayer ('Nikola', 'Drcalic', '07 15 1990', 'Srbija', 3, continets.EUROPA, 2000);
    var player_2 = createPlayer ('Adam', 'Sendler', 'January 24 1970', 'Canada', 1.5, continets.NORTH_AMERICA, 5000);
    var player_3 = createPlayer ('Nik', 'Slauther', '08 03 2000', 'Australia', 2, continets.AUSTRALIA, 1500);
    var player_4 = createPlayer ('Yo', 'Ping', '05 15 1980', 'China', 3.5, continets.ASIA, 3200);
    var player_5 = createPlayer ('Milan', 'Pavlovic', '01 21 1990', 'Srbija', 3, continets.EUROPA, 1000);
    var player_6 = createPlayer ('Karl', 'Johanson', '11 21 1954', 'Brasil', 2, continets.SOUTH_AMERICA, 1300);

    var betPlace_1 = createBettingPlace ('Srbija', 'Belgrade', 11000, 'Nemanjina', 77);
    var betPlace_2 = createBettingPlace ('France', 'Lyon', 554000, 'Napoleon Bonaparta', 150);
    var betPlace_3 = createBettingPlace ('Germany', 'Munich', 554200, 'Karl Marx', 15);

    betPlace_1.addPlayer(player_1);
    betPlace_1.addPlayer(player_2);
    betPlace_2.addPlayer(player_3);
    betPlace_2.addPlayer(player_4);
    betPlace_2.addPlayer(player_5);
    betPlace_3.addPlayer(player_6);

    house.addBettingPlaces(betPlace_1);
    house.addBettingPlaces(betPlace_2);
    house.addBettingPlaces(betPlace_3);

    console.log(house.getData());

    //console.log(house.listOfBettingPlace[0].listOfPlayers[0].getData());

})();


