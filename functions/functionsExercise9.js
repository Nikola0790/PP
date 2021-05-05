'use strict'
/* 
1. Write a function that checks if a given string contains digit 5.
    Input: “1b895abd”
    Output: true
    Input: “1bser9re”
    Output: false
*/
console.log('*** Task 1 ***');

var checkContainsNum = function (str) {
    var result;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '5') {
            result = true;
            break;
        } else {
            result = false;
        }
    }
    return result;
}

console.log(checkContainsNum("1b895abd"));
console.log(checkContainsNum("1bser9re"));

console.log('\n');

/*
2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with
‘**’.
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!”
*/

console.log('*** Task 2 ***');

function test (input) {

    var newString = '';

        for (var i = 0; i < input.length; i++) {
            if (input[i] === 'J') {
                newString += '*';
            } else if (input[i] === 'S') {
                newString += '*';
            } else {
                newString += input[i];
            }
        }
        return newString;
}
console.log(test('Programming in JS is super interesting!'));

console.log('\n');
/*
3. Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’
Output: “Good morning”
*/
console.log('*** Task 3 ***');

function insertCharacter (item, index, thing) {

    var output = '';

    for (var i = 1; i <= index; i++) {
        if (i < index) {
            output += item[i - 1];
        } else if (i === index) {
            output += thing;
        }
    }
    for (var j = 1; j <= item.length; j++) {
        if (j === index) {
            output += item[j - 1];
        } else if (j > index) {
            output += item[j - 1];
        }
    }
    return output;
}

console.log(insertCharacter('Goo morning', 4, 'd'));

console.log('\n');
/*
4. Write a function that deletes a character from the given position in the string.
Input: “Goodd morning!”, 3
Output: “Good morning!”
*/
console.log('*** Task 4 ***');

function deletCharacter (str, position) {

    var newStr = '';

    for (var i = 0; i < str.length; i++) {
        if (i === position) {
            newStr = newStr;
        } else if (i < position) {
            newStr += str[i];
        } else if (i > position && i < str.length) {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(deletCharacter('Goodd morning!', 3));

console.log('\n');
/*
5. Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]
*/
console.log('*** Task 5 ***');

function deleteElements (arr) {
    
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
}

console.log(deleteElements([3, 5, 1, 8, 90, -4, 23, 1, 67]));

console.log('\n');
/*
6. Write a function that replaces the elements of the given array between two positions with
their doubled values.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
*/
console.log('*** Task 6 ***');
var doubleValuesBeetwenPos = function (array, position_1, position_2) {
    
    var newArray = [];
    
    for (var i = 0; i < array.length; i++) {
        if (i >= position_1 && i <= position_2) {
            newArray[i] = array[i] * 2;
        } else {
            newArray[i] = array[i];
        }
    }
    return newArray;
}

console.log(doubleValuesBeetwenPos([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));

console.log('\n');
/*
7. Write a function that checks if a given object has a given property with the given value.
Input: {x: 20, y: 30}, “x”, 20
Output: true
Input: {x: 20, y: 30}, “z”, 20
Output: false
Input: {x: 20, y: 30}, “x”, 10
Output: false
*/
console.log('*** Task 7 ***');



/*
8. Write a function that checks if every element of the first array is contained in the second
array. Be careful with repetitions!
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true
*/
console.log('*** Task 8 ***');

var checkElement = (function (a, b) {

    var count = 0;

    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                count ++;
                break;
            }
        }
    }
    if (count === a.length) {
        return true;
    } else {
        return false;
    }
})([3, 4, 1, 3, 5], [8, 9, 3, 1, 5, 11, 4, 3, 5]);

console.log(checkElement);

console.log('\n');
/*
9. Write a function that sorts an array of strings by the number of appearances of the letter
‘a’ or ‘A’.
Input: [‘apple’, ‘tea’, ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]
*/
console.log('*** Task 9 ***');



/*
10. Write a function that prints out the date of the next day.
Output: 25. 10. 2018.
*/
console.log('*** Task 10 ***');

/*
11. Write a function that prints out the date of the previous day.
Output: 23. 10. 2018.
*/
console.log('*** Task 11 ***');
/*
12. Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output:
  78
 111
   4
4321
*/
console.log('*** Task 12 ***');

function alignedRightSide (arr) {

    var maxLetter = arr[0], num = '', newLine = '\n', space = ' ';

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxLetter) {
            maxLetter = arr[i];
        }
    }
    maxLetter += '';

    for (var j = 0; j < arr.length; j++) {
        for (var k = 0; k < maxLetter.length; k++) {
            if (k < maxLetter.length - (arr[j] + '').length) {
                num += space;
            }
        }
        num += arr[j] + newLine;
    }
    return num;
}

console.log(alignedRightSide([78, 111, 4, 4321]));