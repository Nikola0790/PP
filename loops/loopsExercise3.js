/* 1. Get the sum of two arrays…actually the sum of all their elements.
P.S. Each array includes only integer numbers. Output is a number too 
var arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
var arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
*/
console.log('*** TASK 1 *** \n');

var arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
var arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
var sum = 0;

var arrSum = arr_1.length >= arr_2.length ? arr_1.length : arr_2.length;

for (var i = 0; i < arrSum; i++) {
    sum += arr_1[i];
    sum += arr_2[i];
}
console.log(sum);
console.log('\n');
/* 2. Using a for loop print all even numbers up to and including n. Don’t include 0. 
var n1 = 22; */
console.log('*** TASK 2 *** \n');

var n1 = 22;

for (var i = 1; i <= n1; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log('\n');

/* 3. Using a for loop output the elements in reverse order 
var arr = [43, "what", 9, true, "cannot", false, "be", 3, true];*/
console.log('*** TASK 3 *** \n');

var arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
var arrReverse = [];

for (var i = arr.length - 1; i >= 0; i--) {
    arrReverse[arrReverse.length] = arr[i]
}
console.log(arrReverse);
console.log('\n');

/* 4. Given two arrays of integers. Add up each element in the same position and
create a new array containing the sum of each pair. Assume both arrays are of the same length. 
var arr_3 = [4, 6, 7];
var arr_4 = [8, 1, 9];
*/
console.log('*** TASK 4 *** \n');

var arr_3 = [4, 6, 7];
var arr_4 = [8, 1, 9];
var arrSum = [];

for (var i = 0; i < arr_3.length; i++) {
    arrSum[i] = arr_3[i] + arr_4[i];
}

console.log(arrSum);
console.log('\n');

/* 5. Given a string change the every second letter to an uppercase ‘Z’. Assume
there are no space.
var str1 = "javascript"; */

console.log('*** TASK 5 *** \n');

var str1 = 'javascript';
var str2 = "";

for (var i = 0; i < str1.length; i++) {
    if((i+1) % 2 === 0) {
        str2 += 'Z'
    }else {
        str2 += str1[i]
    }
}
console.log(str2);
console.log('\n');


/* 6. Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not. 
let str2 = "don’t know why";
*/ 
console.log('*** TASK 6 *** \n');

var str2 = "don’t know why";

for (var i = 0; i < str2.length; i++) {
    if (str2[i] === 'y') {
        var letter = 'yes'
    }else {
        var letter = 'no'
    }
}

console.log(letter);

console.log('\n');

/* 7. Given a number n Calculate the factorial of the number.
let n2 = 4;  4 * 3 * 2 * 1 = 24
Example output: 24 */

console.log('*** TASK 7 *** \n');

var n2 = 4;
var nF = 1;

for (var i = 1; i <= n2; i++) {
    nF *= i
}

console.log(nF);

console.log('\n');

/* 8. Write a program that will allow someone to guess a four digit pin exactly 4
times. If the user guesses the number correctly. It prints “That was
correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.
let pin = 0704; */
console.log('*** TASK 8 *** \n');

var pin = 0704;
var guess = [1234, 5698, 0704, 9235];

for (var i = 0; i < 4; i++) {
   console.log('Input PIN:' + guess[i]);
   if (guess[i] === pin){
       console.log('That was correct!');
       break;
   }else {
       console.log('Sorry that was wrong.');
   }
} 
 
console.log('\n');
/* 9. Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
Palindrome: a word, phrase, or sequence that reads the same backward as
forward, e.g., madam or nurses run. 
let str3 = "racecar";
let str4 = "Java";
*/
console.log('*** TASK 9 *** \n');

var str3 = 'racecar';

for (var start = 0, end = str3.length - 1; start < end; start ++, end--) {
    if (str3[start] === str3[end]) {
        var answer = 'Str3 is palindrome';
    }else {
        var answer = 'Str3 isn\'t palindrome';
    }
}
console.log(answer);

var str4 = 'Java';
var answer = ''
for (var start = 0, end = str4.length - 1; start < end; start ++, end--) {
    str4[start] === str4[end] ?  answer = 'Str4 is palindrome' : answer = 'Str4 isn\'t palindrome';
}
console.log(answer);

console.log('\n');

/* 10. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
let num1 = 2; 
let num2 = 8; 
Example output: 1 + 2 = 3
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36  */
console.log('*** TASK 10 *** \n');

var num1 = 2;
var sum = 0;

for (var i = 0; i <= num1; i++) {
    sum += i
}
console.log(sum);

var num2 = 8;
var sum = 0;

for (var i = 0; i <= num2; i++) {
    sum += i
}
console.log(sum);