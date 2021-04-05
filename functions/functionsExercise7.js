'use strict'

/* 1. Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
 */
console.log('*** Task 1 ***');

var fortuneTeller = function (numChildren, partner, geoLocation, title) {

    var fortune = "You will be a " + title + " in " + geoLocation + " and married to " + partner + " with " + numChildren + " kids.";
    return fortune;
}

console.log(fortuneTeller(3, 'Eva', 'Milano', 'web developer'));
console.log(fortuneTeller(2, 'Evelin', 'Madrid', 'bus driver'));
console.log(fortuneTeller(1, 'Ana', 'Belgrade', 'doctor'));

console.log('\n');

/* 2. You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.

Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.*/

console.log('*** Task 2 ***');

var calcDogAge = function (puppyAge) {

    var calcYears = puppyAge * 7;
    var result = "Your dog is " + calcYears + " years old in dog years!"
    return result;
}

console.log(calcDogAge(2));
console.log(calcDogAge(5));
console.log(calcDogAge(3));

console.log('\n');

/* 3. Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.

Bonus: Accept floating point values for amount per day, and round the result to a round number. */

console.log('*** Task 3 ***');

function lifetimeSupply (age, amountPerDay) {

    var maxAge = 80, result, calc;

    calc = (maxAge - age) * 365 * amountPerDay;
    result = 'You will need ' + parseInt(calc) + ' chocolate to last you until the ripe old age of ' + maxAge;
    return result;
}

console.log(lifetimeSupply(30, 3));
console.log(lifetimeSupply(30, 1));
console.log(lifetimeSupply(25, 0.5));

console.log('\n');

/* 4. It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/
console.log('*** Task 4 ***');

function celsiusToFahrenheit (cel) {
    return cel + 'C is ' + (cel * 1.8 + 32) + 'F.';
}

console.log(celsiusToFahrenheit(10));

function fahrenheitToCelsius (f) {
    return f + 'F is ' + ((f - 32) / 1.8) + 'C.';
}

console.log(fahrenheitToCelsius(55));