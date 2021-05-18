'use strict'

/* Try to use built-in object methods to solve some of the problems here */

/* 1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]*/

console.log('*** 1 ***');

function duplicates (arr) {

    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i], arr[i]);
    }
    return newArr;
}

console.log(duplicates([2, 4, 7, 11, -2, 1]));

console.log('\n');
/* 2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] 
 */
console.log('*** 2 ***');

var arr = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

function removeDuplicate (x) {
    return x.filter (function (value, index) {
        return x.indexOf(value) === index;
    });
}

var newArr = removeDuplicate(arr);


console.log(newArr.sort(function(a, b) {
    return a - b;
  }));

console.log('\n');

/* 3. 

a) Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true

b) Write a function that counts the number of elements less than the middle element. 
If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4 */

/* a) */

console.log('*** 3 ***');

function checkOddNum (arr) {
    var newArr = arr.filter (function (a) {
        return a % 2 !== 0;
    })
    if (newArr.length > 0) {
        return true;
    } else {
        return false;
    }
}


console.log(checkOddNum([1, 2, 9, 2, 1]));

/* b) */

function countElLessMiddleEl (arr) {
    if (arr.length % 2 === 0) {
        return 'ERROR';
    } else {
        return Math.ceil(arr.length / 2);
    }
}

console.log(countElLessMiddleEl([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

console.log('\n');

/*  4. Write a function that finds the smallest element of a given array. 
The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 }*/
console.log('*** 4 ***');

function findMinValueAndLastPosOfValue (arr) {

    var obj = {};
    var min = Math.min(...arr); // Change solution, ... don't use yet !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var lastIndex = arr.lastIndexOf(min);

    return obj = {
        minValue: min,
        minLastIndex: lastIndex
    }
}

console.log(findMinValueAndLastPosOfValue([1, 4, -2, 11, 8, 1, -2, 3]));

// ************** Way without (...) !!! **********************************************

function findMinValueAndLastPosOfValue (arr) {

    var obj = {};
    var min = arr[0];
    var lastIndex;

    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    lastIndex = arr.lastIndexOf(min);
    
    return obj = {
        minValue: min,
        minLastIndex: lastIndex
    } 
}

console.log(findMinValueAndLastPosOfValue([1, 4, -2, 11, 8, 1, -2, 3]));
console.log('\n');

/* 5. 

a) Write a function that finds all the elements in a given array less than a given element. 
	Input: [2, 3, 8, -2, 11, 4], 6 
	Output: [2, 3, -2, 4]

b) Write a function that finds all the elements in a given array that start with the “pro” substring. 
   The function should be case insensitive. 
	Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
	Output: [’Programming’, ‘product’]
    
c) Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 
    */    

console.log('*** 5 ***');

/* a) */

function findElLessOfGivEl (arr, y) {
    //return arr.filter (x => x < y);
    return arr.filter(function(el) {
        return el < y;
    })
}

console.log(findElLessOfGivEl([2, 3, 8, -2, 11, 4], 6 ));

/* b) */

function findElStartWithPro (arr) {

    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if ((arr[i][0] === 'P' || arr[i][0] === 'p') && (arr[i][1] === 'R' || arr[i][1] === 'r') && (arr[i][2] === 'O' || arr[i][2] === 'o')) {
            newArr[newArr.length] = arr[i]; 
        }
    }
    return newArr;
}

console.log(findElStartWithPro(['JavaScript', 'Programming', 'fun', 'product']));

/* c) */

function filterSome (arr, func, givNum) {
    return func (arr, givNum);
}

console.log(filterSome ([2, 5, 3, 8, 15, -2, 11, 4, 10], findElLessOfGivEl, 9));
console.log(filterSome (['JavaScript', 'Programming', 'fun', 'product'], findElStartWithPro));
console.log('\n');
/* 6. 
a) Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
	[
        {name: ‘apples’, price: 100}, 
        {name: ‘milk’, price: 80}, 
        {name:’bananas’, price: 150}
    ]
b) Write a function that calculates the total price of your shopping list. 
c) Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
d) Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 
 */

console.log('*** 6 ***');

/* a) */

var listProducts = [];

function Product (name, price) {
    this.name = name,
    this.price = price
}

listProducts.push(new Product ('apples', 100), new Product ('bananas', 150), new Product ('milk', 80)); 
console.log(listProducts);

/* b) */

function totalPrice (list) {
    var priceAllProd = 0;
    for (var i = 0; i < list.length; i++) {
        priceAllProd += list[i].price;
    }
    return 'Total price of products: ' + priceAllProd;
}

console.log(totalPrice(listProducts));

// Second solution by Built in .reduce !!!

var sumPrice = listProducts.reduce (function(a, b) {
    return a + b.price;
}, 0);

console.log('Total price of products:', sumPrice);

/* c) */

var averagePrice = listProducts.reduce (function (a, b) {
    return a + b.price / listProducts.length;
}, 0);

var average = averagePrice.toFixed(3);

console.log('Average price of products:', average);

/* d) */

listProducts.sort (function (a, b) {
    return a.price - b.price;
})

var mostExpenProd = listProducts[listProducts.length - 1].name.toUpperCase(); 
console.log(mostExpenProd);

console.log('\n');

/* 7. 
a) Write a function that checks if a given string is written in all capitals.
b) Write a function that checks if a given string contains any digits.
c) Write a function that checks if a given string is a valid hexadecimal color.
d) Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
e) Write a function named validator that returns an object with properties 
   stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).*/

console.log('*** 7 ***');

/* a) */

function checkCapitals (str) {
    if (str === str.toUpperCase()) {
        return 'String is ok.'
    } else {
        return 'String must be written in all capitals !!!'
    }
}

//console.log(checkCapitals('NIKOLA'));

/* b) */

function containDigits (str) {

    var sum = 0;
    var check;

    for (var i = 0; i < str.length; i++) {
        if (isNaN(parseInt(str[i])) === false) {
            sum++;
        } 
    }
    if (sum > 0) {
        check = 'Pass is ok, contains digit';
    } else {
        check = 'Password isn\'t ok, must contains digit !!!'
    }
    return check;
    
}

//console.log(containDigits('Niko9'));

/* c) */

function checkHexaColor (str) {

    var regex = /[A-Z]/g;
    var regex_2 = /[a-z]/g;
    var result;
    var count = 0;

    for (var i = 1; i < str.length; i++) {
        if (isNaN(parseInt(str[i])) === true && str[i].match(regex) === null && str[i].match(regex_2) === null) {
            count++;
        }
    }
    if (count > 0 || str[0] !== '#') {
        result = 'Color code is not correct !!!';
    } else {
        result = 'Color code is valid.'
    }  
    return result;
}

//console.log(checkHexaColor('#90ffcc'));



/* d) */

function checkIntervalYear (num) {
    if (num >= 1900 && num < 2018) {
        return 'Year is ok.'
    } else {
        return 'Year must belongs to the interval from 1900 to 2018.'
    }
}

//console.log(checkIntervalYear(2010));

/* e) */

function Validator (name, pass, color, year) {
    this.stringValidator = name,
    this.passwordValidator = pass,
    this.colorValidator = color,
    this.yearValidator = year
}

var validationData = new Validator (checkCapitals, containDigits, checkHexaColor, checkIntervalYear);
console.log(validationData);
console.log(validationData.stringValidator("NIKOLA"));
console.log(validationData.passwordValidator('nik90'));
console.log(validationData.colorValidator('#99ffcc'));
console.log(validationData.yearValidator(1995));

console.log('\n NEXT PRINT IS WITH MISTAKES. \n');
console.log(
    validationData.stringValidator('nikola'), '\n', 
    validationData.passwordValidator('nik'), '\n',
    validationData.colorValidator('#99ff*cc'), '\n',
    validationData.yearValidator(2021)
);

console.log('\n');
/* 
8. Write a function that calculates a number of days to your birthday.
    Input: 25 February 
    Output: 5 days 
*/
console.log('*** 8 ***');

function calcNumOfDaysToBirth (today, birthday) {

    var date_1 = new Date (today);
    var date_2 = new Date (birthday);

    var difference = date_2.getTime() - date_1.getTime();

    return difference / (1000 * 3600 * 24) + ' days';
}

console.log(calcNumOfDaysToBirth('05/17/2021', '09/20/2021'));
console.log('\n');

/*
9. Write a function that for a given departure and arrival time calculates the time the trip takes.
	Input: 8:22:13 11:43:22
	Output: 3 hours 21 minutes 9 seconds
*/
console.log('*** 9 ***');

function tripTime (departure, arrival) {

    var hours, min, sec, splitDeparture, splitArrival;

    splitDeparture = departure.split(':');
    splitArrival = arrival.split(':');

    if (parseInt(splitDeparture[0]) > parseInt(splitArrival[0])) {
        hours = parseInt(splitArrival[0]) + 24 - parseInt(splitDeparture[0]);
    } else {
        hours = parseInt(splitArrival[0]) - parseInt(splitDeparture[0]);
    }

    if (parseInt(splitDeparture[1]) < parseInt(splitArrival[1])) {
        min = parseInt(splitArrival[1]) - parseInt(splitDeparture[1]);
    } else {
        min = parseInt(splitDeparture[1]) - parseInt(splitArrival[1]);
    }

    if (parseInt(splitDeparture[2]) < parseInt(splitArrival[2])) {
        sec = parseInt(splitArrival[2]) - parseInt(splitDeparture[2]);
    } else {
        sec = parseInt(splitDeparture[2]) - parseInt(splitArrival[2]);
    }
    
    return hours + ' hours ' + min + ' minutes ' + sec + ' seconds'
}

console.log(tripTime('8:22:13', '11:43:22'));

console.log('\n');
/*
10. 
    a) Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
    b) Write a function that calculates the distance between two points in the space

*/
console.log('*** 10 ***');

/* a) */

function PointInSpace (x, y, z) {

    this.x = x,
    this.y = y,
    this.z = z
}

var coordinates_1= new PointInSpace (15, 5, 11);
var coordinates_2= new PointInSpace (3, 2, 0);
console.log(coordinates_1, coordinates_2);

/* b) */

function distance (coordinates1, coordinates2) {

    var result, x, y, z;

    x = coordinates1.x - coordinates2.x;
    y = coordinates1.y - coordinates2.y;
    z = coordinates1.z - coordinates2.z;

    return result = (Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2))).toFixed(3);
}

console.log(distance(coordinates_1, coordinates_2));
console.log('\n');

/*
11. 
a) Write a function that generates a random integer value between 5 and 20.
b) Write a function that generates a random integer value between 50 and 100. 
c) Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.  
*/
console.log('*** 11 ***');

/* a) */
function randomIntBet5_20 () {
    return Math.floor(Math.random() * (20 - 5 + 1) + 5);
}

console.log(randomIntBet5_20());

/* b) */
function randomIntBet50_100 () {
    return Math.floor(Math.random() * (100 - 50 + 1) + 50);
}

console.log(randomIntBet50_100());

/* c) */

function makeArr (arrayLength, funcGen) {
    var arr = [];
    for (var i = 0; i < arrayLength; i++) {
        arr.push(funcGen());
    }
    return arr;
} 

console.log(makeArr(5, randomIntBet50_100));
console.log('\n');

/*
12. Write a function that shuffles the elements of a given array. 
		Input: [3, 6, 11, 2, 9, 1]
		Output: [6, 2, 9, 1, 3, 11]  (it can be any random permutation of the given array)
*/
console.log('*** 12 ***');

function shufflesEl (arr) {

    var temp;

    for(var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
}

console.log(shufflesEl([3, 6, 11, 2, 9, 1]));