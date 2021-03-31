/* 1. Write a function that converts an array of strings into an array of numbers. 
Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]
 */
console.log('*** Task 1 ***');

function convert (array) {

    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        if (isFinite(array[i]) === true) {
            newArray[newArray.length] = parseFloat(array[i]);
        }
    }
    return newArray;
}

console.log(convert(["1", "21", undefined, "42", "1e+3", Infinity]));

console.log('\n');

/* 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
	Output: “015false-2247”  */

    console.log('*** Task 2 ***');

function a (arr) {

    var str = '';

    for (var i = 0; i < arr.length; i++) {
        if (isFinite(arr[i]) === true && arr[i] !== null) {
            str += arr[i];
        }
    }
    return str;
}

console.log(a([NaN, 0, 15, false, -22, '', undefined, 47, null]));

console.log('\n');

/* 3. Write a program to filter out falsy values from the array.

Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]
 */

console.log('*** Task 3 ***');

function filterFalsy (arra) {

    var x = [];

    for (var i = 0; i < arra.length; i++) {
        if (isFinite(arra[i]) === true && arra[i] !== null && arra[i] !== false && arra[i] !== 0 && arra[i] !== '') {
            x[x.length] = arra[i];
        }
    }
    return x;
}

console.log(filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));

console.log('\n');

/* 4. Write a program that calculates a number of integer values in the array.

Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3
*/
console.log('*** Task 4 ***');

function calcNumOfInt (ar) {
    
    var num = 0;

    for (var i = 0; i < ar.length; i++) {
        if (isFinite(ar[i]) === true && ar[i] !== null && ar[i] !== false && ar[i] !== '' && parseInt(ar[i]) === parseFloat(ar[i])) {
            num++;
        }
    }
    return num;
}
console.log(calcNumOfInt([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));

console.log('\n');

/* 5. Write a program that calculates a number of float values in the array.

Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2
 */

console.log('*** Task 5 ***');

function calcNumOfFloat (m) {

    var c = 0;

    for (var i = 0; i < m.length; i++) {
       if (isFinite(m[i]) === true && m[i] !== null && m[i] !== false && m[i] !== '' && parseFloat(m[i]) !== parseInt(m[i])) {
           c++;
       }        
    }
    return c;
}
console.log(calcNumOfFloat([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));