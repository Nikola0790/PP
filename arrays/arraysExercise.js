/* Write an array of months in a year. Using console.log display June, October and January
from the array.*/

var months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "sep",
  "oct",
  "nov",
  "dec",
];

console.log(months[5], months[9], months[0]);

/*2. Write an arrays of days in a week. Using console.log display Sunday from the array.*/

var weekdays = ["mon", "thu", "wed", "thr", "fri", "sat", "sunday"];
console.log(weekdays[6]);

/*3. Print all negative elements from the array [2, -4, 5, -2, -11]. */

var arr1 = [2, -4, 5, -2, -11];

console.log(arr1[1], arr1[3], arr1[4]);

/*4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
    72, 14, 9].*/

var arr2 = [5, 15, -5, 20, 12, 18, 72, 14, 9];
var i = 3;

if (arr2[0] % i === 0) {
  console.log(arr2[0]);
}

if (arr2[1] % i === 0) {
  console.log(arr2[1]);
}
if (arr2[2] % i === 0) {
  console.log(arr2[2]);
}
if (arr2[3] % i === 0) {
  console.log(arr2[3]);
}
if (arr2[4] % i === 0) {
  console.log(arr2[4]);
}
if (arr2[5] % i === 0) {
  console.log(arr2[5]);
}
if (arr2[6] % i === 0) {
  console.log(arr2[6]);
}
if (arr2[7] % i === 0) {
  console.log(arr2[7]);
}
if (arr2[8] % i === 0) {
  console.log(arr2[8]);
}
/* 5. What is the index of number 24 in the following array? [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
10, 26, 7]]; 

Using console.log:
● Display the 3rd element of the array,
● Display the 2nd element of the 3rd element.*/

var arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

console.log(arr[0][3]);
console.log(arr[2]);
console.log(arr[2][1]);
