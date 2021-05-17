'use strict'

/*
Try to solve all assignments on a separate branch. Keep in mind that you should try to use built-in objects 
and their methods, solo or combined. You should use loops only for the 4 and 9 assignment, all others can be solved using built-in object methods.*/


/*
1.  Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

	12345 -> 54321
*/
console.log('*** 1 ***');

function reverseNumber (num) {

    var n, arr, str;

    n = num.toString();
    arr = n.split('');
    arr.reverse();
    str = arr.join('');
    return parseInt(str);
}

console.log(reverseNumber(12345));
console.log('\n');
/*
2.  Write a JavaScript function that returns a passed string with letters in alphabetical order. 
    Note: Assume punctuation, numbers and symbols are not included in the passed string.

    “Webmaster” -> “abeemrstw”
*/
console.log('*** 2 ***');

function sortAlpha (str) {

    return str.toLowerCase().split('').sort().join('');
}

console.log(sortAlpha('Webmaster'));
console.log('\n');
/*
3.  Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"
*/
console.log('*** 3 ***');

/*
4.  Write a function to split a string and convert it into an array of words.

	"John Snow" -> [ 'John', 'Snow' ]
*/
console.log('*** 4 ***');

function splitString (name) {

    return name.split(' ');
}

console.log(splitString('John Snow'));  // When I check typeof result of function, I get OBJECT in console. Why? ************************************************************
console.log('\n');

/*
5.  Write a function to convert a string to its abbreviated form. 

	"John Snow" -> 	"John S."
*/
console.log('*** 5 ***');
// Try with .substring

/*
6.  Write a function that adds string to the left or right of string, by replacing it’s characters.

	'0000', ‘123’, 'l' -> 0123 
    '00000000', ‘123’, 'r' -> 12300000
*/
console.log('*** 6 ***');

function addStr (str, add, side) {
    if (side === 'l') {
        return add.concat(str).slice(str.length);
    } else if (side === 'r') {
        return str.concat(add).slice(0, -str.length);
    }
}

console.log(addStr('123', '0000', 'l'));
console.log(addStr('123', '00000000', 'r'));
console.log('\n');
/*
7.  Write a function to capitalize the first letter of a string and returns modified string.

    "js string exercises" -> "Js string exercises"
*/
console.log('*** 7 ***');

function capitalizeFirstLetter (str) {
    
    var firstLetter;
    var sliceStr;
    var newStr;

    firstLetter = str.charAt(0).toUpperCase();
    sliceStr = str.slice(1);
    newStr = firstLetter.concat(sliceStr);
    return newStr;
}

console.log(capitalizeFirstLetter('js string exercises'));
console.log('\n');
/*
8.  Write a function to hide email addresses to protect them from unauthorized users.

	"somerandomaddress@example.com" -> "somerand...@example.com"
*/
console.log('*** 8 ***');

function hideEmail (email) {

    var indexOfMonkey;
    var cutEmail;
    var cutEmail2;
    var threeDot = '...';
    var hiddenEmail;

    indexOfMonkey = email.indexOf('@');
    cutEmail = email.slice(0, 5);
    cutEmail2 = email.slice(indexOfMonkey, email.length);
    hiddenEmail = cutEmail.concat(threeDot).concat(cutEmail2);
    return hiddenEmail;
}

console.log(hideEmail('somerandomaddress@example.com')); 
console.log('\n');
/*
9.  Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';

    "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"
*/
console.log('*** 9 ***');