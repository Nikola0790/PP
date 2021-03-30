/* 1. Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no */

console.log('*** TASK 1 ***');

function checkElement (arr, n) {
    
    var output = '';
    var count = 0;
    
    for (var i = 0; i < arr.length; i++) {
        if (n === arr[i]) {
            count ++;
        }
    }
    if (count >= 1) {
        output = 'Yes'
    }else {
        output = 'No'
    }
    return output;
}

console.log(checkElement([5, -4.2, 3, 7], 3));

console.log('\n');

/* 2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] 
*/

console.log('*** TASK 2 ***');

function multiPosEl (array) {
    
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            newArray[newArray.length] = array[i] * 2;
        } else {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}

console.log(multiPosEl([-3, 11, 5, 3.4, -8]));

console.log('\n');

/* 3. Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 
*/
console.log('*** TASK 3 ***');

function min (arr) {

    var min = arr[0];
    var index = 0;
    var result;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    for (var j = 0; j < arr.length; j++) {
        if (arr[j] === min) {
            index = j;
        }
    }
    result = min + ' ' + index;
    return result;
}

console.log(min([4, 2, 2, -1, 6]));

console.log('\n');

/* 4. Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2 */

console.log('*** TASK 4 ***');

function secondSmallNum (array) {
    
    var min = array[0]
    var min_2 = array[0];

    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    for (var j = 0; j < array.length; j++) {
        if (array[j] < min_2 && array[j] !== min) {
            min_2 = array[j];
        }
    }
    return min_2;
}

console.log(secondSmallNum([4, 2, 2, -1, 6]));


console.log('\n');

/* 5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 
*/
console.log('*** TASK 5 ***');

function sum (array) {
    
    var add = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            add += array[i];
        }
    }
    return add;
}

console.log(sum([3, 11, -5, -3, 2]));

console.log('\n');

/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */

console.log('*** TASK 6 ***');

function symm (arra) {

    var checkArrSymm = [];
    var result = '';

    for (var i = 0; i < arra.length; i++) {
        if (arra[i] === arra[arra.length - 1 - [i]]) {
            checkArrSymm[checkArrSymm.length] = arra[i];
        }
    }
    if (checkArrSymm.length === arra.length) {
        result = 'The array is symmetric.'
    } else {
        result = 'The array isn\'t symmetric.'
    }

    return result;
}

console.log(symm([2, 4, -2, 7, -2, 4, 2]));

console.log('\n');

/* 7. Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] 
*/

console.log('*** TASK 7 ***');

function intertwins (arr_1, arr_2) {

    var newArr = [];

    for (var i = 0; i < arr_1.length; i++) {
        newArr[newArr.length] = arr_1[i];
        newArr[newArr.length] = arr_2[i];
    }
    return newArr
}

console.log(intertwins([4, 5, 6, 2], [3, 8, 11, 9]));

console.log('\n');

/* 8. Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

console.log('*** TASK 8 ***');

function concat (array_1, array_2) {

    var newArray = [];
    var y = 0;

    for (var i = 0; i < array_1.length + array_2.length; i++) {
        if (i < array_1.length) {
            newArray[newArray.length] = array_1[i];
        } else {
            newArray[newArray.length] = array_2[y];
            y++;
        }
    }
    return newArray;
}

console.log(concat([4, 5, 6, 2], [3, 8, 11, 9]));

console.log('\n');

/* 9. Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

console.log('*** TASK 9 ***');

function deleteElement (a, e) {

    var new_A = [];

    for (var i = 0; i < a.length; i++) {
        if (e !== a[i]) {
            new_A[new_A.length] = a[i];
        }
    }
    return new_A;
}

console.log(deleteElement([4, 6, 2, 8, 2, 2], 2));

console.log('\n');

/* 10. Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/

console.log('*** TASK 10 ***');

function insertElement (e, p, arr) {

    var newArray = [];
    var result = '';

    for (var i = 0; i < arr.length; i++) {
        if (i === p) {
            newArray[p] = e;
        } 
        newArray[newArray.length] = arr[i];
    }
    if (p > arr.length) {
        result = 'ERROR';
    } else {
        result = newArray;
    }
    return result;
}

console.log(insertElement(78, 3, [2, -2, 33, 12, 5, 8]));