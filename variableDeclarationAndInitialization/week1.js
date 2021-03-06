/**************************************** 
Variable declaration and initialization

1. Create several variables using different letter cases and beginning characters. Check if they
still exist if you refer to them in different case - does case matter here? Try to declare a variable
starting with number as the first character.

2. Save a string (text) describing your current mood in a variable and print it out in console.

3. Feel free to play around in the console and get familiar with it.
****************************************/
var nikolaAge = 30;
var nikolaBirthYear = 1990;
var nikolaSurname = "Drcalic";
var job = "programmer";

console.log(nikolaBirthYear, nikolaSurname, job);

nikolaAge = 25;
job = "JS frontend programmer";

console.log(nikolaAge, job);

var mood = "happy";

console.log(mood);

/*********************
Arithmetic operators
*********************/

/* 4. Play around in the console: add, subtract, multiply and divide some numbers. Use numbers
stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3.
Why do we get these results? */
var a = 2;
var b = 3;
var c = 31;

var d = b - a - c;
console.log(d);
console.log(3 * 5 - 7 / 3, 4 / 2 - 1.14 * 3);
d = c / b - a;
console.log(d);

/* #5 How many grams weight 1.2kg of bananas? */
var bananas = 1.2;
var bananasToGr = bananas * 1000;
console.log(bananasToGr);

/*  #6 How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What
about Tom who is being late half an hour? It is hard to be on time these days… */
var min = 5;
var sec = 60;
var late = min * sec;
console.log("Anna late " + late + " seconds");

min = 30;
late = min * sec;
console.log(`Tom late ${late} seconds`);

/* #7 How many MB of additional memory we have if we buy a 4GB USB stick? How many news
articles each in size 98KB can fit in it? */
var usbGb = 4;
var usbMb = usbGb * 1024;
var usbInKb = usbMb * 1024;
var newsArticlesInKb = 98;
console.log(
  `${usbGb}GB USB stick have a ${usbMb}MB. ${
    usbInKb / newsArticlesInKb
  } articles can fit in USB stick.`
);

/* #9 Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7? */

a *= 2;
b += 3;
c /= 5;
d -= 7;
console.log(a, b, c, d);

/* #10 Create the following variables:
- a variable containing your name,
- a variable containing your age,
- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types. */

var name = "Nikola";
var myAge = 30;
var _animal = "I don't have a cat.";
console.log(name, myAge, _animal);
console.log(typeof name, typeof myAge, typeof _animal);

/* #11 Check which type are these values:
- “number”
- true
- null
- “false”
- 56 
*/

console.log(typeof "number");
console.log(typeof true);
console.log(typeof null);
console.log(typeof "false");
console.log(typeof 56);

/***********************
    Logical operators
***********************/

/* #12 Check how good you are at guessing the Boolean equivalent of different values using the
console. Do you remember how to check for a Boolean equivalent of a value? */

console.log(!!23, !!"Nikola", !!"");

/* #13 Use the console to check the results you think should go in the following table: */

p = true;
q = true;
console.log(p && q, p || q);
p = true;
q = false;
console.log(p && q, p || q);
p = false;
q = true;
console.log(p && q, p || q);
p = false;
q = false;
console.log(p && q, p || q);

/* #14 If the variable age stores the information about user’s age, how we can check whether it
contains a correct value? Write expressions for checking:
● Is age negative value
● Is age greater than 120 */

var age = 35;
console.log(age > 0);
console.log(age < 120);

/* #15 Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
we store the current speed value in the variable speed. Write an expression which will check if
we are driving drive safely or not? (true if we are driving safe and false if not) */
var speed = 100;
console.log(speed > 60 && speed < 120);
speed = 150;
console.log(speed > 60 && speed < 120);
