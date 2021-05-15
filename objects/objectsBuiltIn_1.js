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
    var min = Math.min(...arr);
    var lastIndex = arr.lastIndexOf(min);

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

/* a) */

function findElLessOfGivEl (arr, y) {
    return arr.filter (x => x < y);
}

console.log(findElLessOfGivEl([2, 3, 8, -2, 11, 4], 6 ));

/* b) */
