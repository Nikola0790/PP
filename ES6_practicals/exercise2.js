'use strict';

/* 1. Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
 */
console.log('*** Task 1 ***');

let tellFortune = (numOfChildren, partnerName, geoLocation, jobTitle) => {
    return `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numOfChildren} kids.`
}

console.log(tellFortune(5, 'Ana', 'Serbia', 'Project Manager'));
console.log(tellFortune(1, 'Marija', 'Spain', 'Cook Chef'));

console.log('\n');

/* 2. You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.

Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.*/

console.log('*** Task 2 ***');

let calcDogAge = puppyAge => `Your doggie is ${puppyAge * 7} years old in dog years!`;

console.log(calcDogAge(2));
console.log('\n');

/* 3. Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.

Bonus: Accept floating point values for amount per day, and round the result to a round number. */

console.log('*** Task 3 ***');

let calculateSupply = (age, amountPerDay) => {
    const maxAge = 100;
    let calc, result;

    calc = (maxAge - age) * 365 * amountPerDay;
    result = `You will need ${parseInt(calc)} to last you until the ripe old age of ${maxAge}.`;
    return result;
}

let res = calculateSupply (30, 2.3);
console.log(res);
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

let celsiusToFahrenheit = cel => `${cel} C is ${cel * 1.8 + 32} F.`;
let fahrenheitToCelsius = f => `${f} F is ${(f - 32) / 1.8} C.`;

console.log(celsiusToFahrenheit(33));
console.log(fahrenheitToCelsius(50));
