'use strict'
//IIFE = Immediately Invoked Function Expressions

/*
1. Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
	Input array: [4, 5, 11, 9]
	Output array: [ 9, 5, 11, 4]
*/
console.log('*** Task 1 ***');

function replaceE (a) {

    var b = a;

    return (
        function (arr) {
            
            var newArr = [];

            for (var i = 0; i < arr.length; i++) {
                if (i === 0) {
                    newArr[i] = arr[arr.length - 1];
                } else if (i === arr.length - 1) {
                    newArr[i] = arr[0];
                } else {
                    newArr[i] = arr[i];
                }
            }
            return newArr;
        }
    )(b);
}

var com = replaceE([4, 5, 11, 9]);
console.log(com);

console.log('\n');
/*
2. Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
    Input: 4 5
    Output: 20 
*/
console.log('*** Task 2 ***');

var calc = (function (a, b) {
    return a * b; 
 }
)(4, 5);

console.log(calc);

console.log('\n');
/*
3.Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
	Input: prograMming
	Output: progra**ing, 2
*/
console.log('*** Task 3 ***');

var replaceMmForStar = function (str) {

    var word = str;
    var replaceMm = (function (a) {

        var newWord = '', count = 0;

        for (var i = 0; i < word.length; i++) {
            if (word[i] === 'm') {
                newWord += '*';
                count ++;
            } else if (word[i] === 'M') {
                newWord += '*';
                count ++;
            } else {
                newWord += word[i];
            }
        }
        return newWord + ', ' + count; 
    })(word);
    return replaceMm;
}

var test = replaceMmForStar('prograMmmMing');
console.log(test);
console.log(replaceMmForStar('prograMming'));

console.log('\n');

/*
4.Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
    Input: pera peric
	Output: pera.peric@gmail.com
*/    
console.log('*** Task 4 ***');

function a (name, surname) {
    function b (name1, surname1) {
        return name1 + '.' + surname1 + '@gmail.com';
    }
    return b(name, surname)
}
var c = a('nikola', 'drcalic');
console.log(c);

console.log('\n');

/*
5.Write a function that returns a function that calculates a decimal value of the given octal number. 
    Input: 034
    Output: 28
*/
console.log('*** Task 5 ***');
 
function calcOctalToDecimal (num, r) {
    num += '';
    return (function () {
        return parseInt(num, r);
    })();
}

console.log(calcOctalToDecimal(34, 8));                             //strict mode signals ERROR, when into brackets fill in 034. Don't accept 034 but accept 34.
console.log('\n');
/*
6.Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. 
The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid. 
    Input: JSGuru 
    Output: Your password is invalid!

	Input: JSGuru123
	Output: Your password is cool! 
*/
console.log('*** Task 6 ***');              

function successCallback () {
        return 'Your password is cool!'  
}

function errorCallback () {
        return 'Your password is invalid!!'
}

function checkPassword (pass, a, b) {
    var count = 0;
    for (var i = 0; i < pass.length; i++){
        if (parseInt(pass[i]) >= 0 ) {
            count ++;
        }
    }
        if (pass.length > 6 && count >= 1) {
            return a();
        } else {
            return b();
        }    
}

console.log(checkPassword('JSGuru123', successCallback, errorCallback));
console.log(checkPassword('JSGuru', successCallback, errorCallback));
console.log(checkPassword('JSGuruuuuuuu', successCallback, errorCallback));

console.log('\n');
/*
7.Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
    Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
    Output: [11, 9, 3] 
*/
console.log('*** Task 7 ***');

var array = [2, 8, 11, 4, 9, 3]

var callback = function (x) {
    return x % 2 !== 0;
}

var filterOddNumbers = function (a, b) {
    return a.filter(b);
}

console.log(filterOddNumbers(array, callback));


