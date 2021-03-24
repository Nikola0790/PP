/* 1. Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false */
console.log('*** 1 ***');

function check (p) {
     if (typeof p === 'string') {
          return 'true';
     }else {
          return 'false';
     }
}

console.log(check('My random string'));

console.log('\n');
/* 2. Write a function to check whether a string is blank or not.
"My random string -> false
" " -> true
12 -> false
false -> false
*/
console.log('*** 2 ***');

function checkVar (n) {
   if (n === " ") {
        var a = 'true'
   }else {
        a = 'false'
   }
   return a;
}

console.log(checkVar(" "));

console.log('\n');

/* 3. Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa" */
console.log('*** 3 ***');

function concat (n, m) {
     var str = '';
     for (var i = 0; i < n; i++) {
          str += m;
     }
     return str;
}

var funcConcat = concat (5, 'Ha');
console.log(funcConcat);

console.log('\n');

/* 4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2 
*/
console.log('*** 4 ***');

function countLetter (str, a) {
     var count = 0;
     for (var i = 0; i < str.length; i++) {
          if (a === str[i]) {
               count += 1;
          }
     }
     return a + ' -> ' + count;
}

var funcCountLetter = countLetter ('My random string', 'n');
console.log(funcCountLetter);

console.log('\n');

/* 5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1. */
console.log('*** 5 ***');

function findPosition (a, b) {
     for (var i = 0; i < a.length; i++) {
          if (b === a[i]) {
               var position = i;
               break;
          }else {
               var position = -1;          
          }
     }
     return position;
}

var funcPosition = findPosition ('My random string', 'd');
console.log(funcPosition);

console.log('\n');

/* 6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1. */
console.log('*** 6 ***');

function findLastPosition (a, b) {
     var lastPos = '';
     for (var i = a.length - 1; i >= 0; i--) {
          if (b === a[i]) {
               var lastPos = i;
               break;
          } else {
               var lastPos = -1;
          }
     }
     switch (lastPos) {
          case -1: lastPos = 'Minus one';
          break;
          case 0: lastPos = 'Zero';
          break;
          case 1: lastPos = 'One';
          break;
          case 2: lastPos = 'Two';
          break;
          case 3: lastPos = 'Three';
          break;
          case 4: lastPos = 'Four';
          break;
          case 5: lastPos = 'Five';
          break;
          case 6: lastPos = 'Six';
          break;
          case 7: lastPos = 'Seven';
          break;
          case 8: lastPos = 'Eight';
          break;
          case 9: lastPos = 'Nine';
          break;
          case 10: lastPos = 'Ten';
          break;
     }
     return lastPos;
}

var lastPosition = findLastPosition ('My stringg', 'i');
console.log(lastPosition);

console.log('\n');

/* 7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"] */

console.log('*** 7 ***');

function convert (str) {
     var arr = [];
     for (var i = 0; i < str.length; i++) {
          if (str[i] === ' ') {
               arr[arr.length] = null;
          } else {
               arr[arr.length] = str[i];
          }
     }
     return arr;
}

var strToArr = convert ('My random string is');
console.log(strToArr);

console.log('\n');

/* 8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself. 
*/
console.log('*** 8 ***');

function primeNumber (prime) {
     var result = '';
     if (prime === 2 || prime === 3) {
          result = 'The number is PRIME !!!';
     }else if (prime % 2 === 0 || prime % 3 === 0) {
          result = 'The number isn\'t prime';
     } else {
          result = 'The number is PRIME !!!'
     }
     return result;
}

var primeNum = primeNumber (53);
console.log(primeNum);

console.log('\n');

/* 9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.

"My random string", "_" -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string" -> "My-random-string"
*/
console.log('*** 9 ***');

function space (strin) {
     var newStr = '';
     for (var i = 0; i < strin.length; i++) {
          if (strin[i] === ' ') {
               newStr += '-';
          } else {
               newStr += strin[i];
          }
     }
     return newStr;
}

var newS = space ('My name is Nikola.');
console.log(newS);

console.log('\n');

/* 10. Write a function to get the first n characters and add “...” at the end of newly created string. */
console.log('*** 10 ***');

function getFirst (s, n) {
     var newS = '';
     for (var i = 0; i < s.length; i++) {
          if (s[i] === n) {
               newS += n;
               newS += '...';
               break;
          }
     }
     return newS;
}

console.log(getFirst ('My name is Nikola', 'y'));

console.log('\n');

/* 11. Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
['1', '21', undefined, '42', '1e+3', Infinity] -> [1, 21, 42, 1000] */

console.log('*** 11 ***');

function convertArr (array) {
     var newArray = [];
     for (var i = 0; i < array.length; i++) {
          if (isFinite(array[i]) === true) {
               newArray[newArray.length] = parseFloat(array[i]);
          }
     }
     return newArray;
}

console.log(convertArr(['1', '21', undefined, '42', '1e+3', Infinity]));

console.log('\n');

/* 12. Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed. */

console.log('*** 12 ***');

function retirement (sex, year, birthYear) {
     var ret = '';
     if (sex === 'women') {
          if (year - birthYear >= 60) {
               ret = 'retired';
          } else {
               ret = 60 - (year - birthYear);
          }
     } else {
          if (year - birthYear >= 65) {
               ret = 'retired';
          } else {
               ret = 65 - (year - birthYear);
          }
     }
     return ret;
}

var leftUntilRetiremnet = retirement ('women', 2020, 1981);
console.log(leftUntilRetiremnet);

console.log('\n');

/* 13. Write a function to humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th */

console.log('*** 13 ***');

function humanizeNumber (num) {
     var humNum = '';
     var numToStr = '';
     numToStr += num;

          if (num % 100 >= 11 && num % 100 <= 13) {
               humNum += numToStr + 'th';
          } else if (numToStr[numToStr.length - 1] == 1) {
               humNum += numToStr + 'st';
          } else if (numToStr[numToStr.length - 1] == 2) {
               humNum += numToStr + 'nd';
          } else if (numToStr[numToStr.length - 1] == 3) {
               humNum += numToStr + 'rd';
          } else {
               humNum += numToStr + 'th';
          }
          return humNum;
}

var a = humanizeNumber (105);
console.log(a);