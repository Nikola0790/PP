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

5.  Write a function to convert a string to its abbreviated form. 

	"John Snow" -> 	"John S."

6.  Write a function that adds string to the left or right of string, by replacing it’s characters.

	'0000', ‘123’, 'l' -> 0123 
    '00000000', ‘123’, 'r' -> 12300000

7.  Write a function to capitalize the first letter of a string and returns modified string.

    "js string exercises" -> "Js string exercises"

8.  Write a function to hide email addresses to protect them from unauthorized users.

	"somerandomaddress@example.com" -> "somerand...@example.com"

9.  Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';

    "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

*/