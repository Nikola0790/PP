/* 1. Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/

console.log('*** TASK 1 ***');

function switchMinMax (array) {

    var max = array[0];
    var min = array[0];
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (min > array[i]) {
            min = array[i];
        }
    }
    for (var j = 0; j < array.length; j++) {
        if (max === array[j]) {
            newArray[j] = min;
        } else if (min === array[j]) {
            newArray[j] = max;
        } else {
            newArray[j] = array[j];
        }
    }
    return newArray;
}

console.log(switchMinMax([ 3, 500, 12, 149, 53, 414, 1, 19 ]));

console.log('\n');

/* 2. Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/

console.log('*** TASK 2 ***');

function dividingByTwoAddFive (arr) {

    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr[newArr.length] = arr[i] / 2 + 5;
    }
    for (var j = 0; j < newArr.length; j++) {
        if (newArr[j] === 0) {
            newArr[j] = 20;
        }
    }
    return newArr;
}

console.log(dividingByTwoAddFive([ 3, 500, -10, 149, 53, 414, 1, 19 ]));

console.log('\n');

/* 3. 
Initialize two arrays. The first one should contain student names, the second one the number of points for each student. 
Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
 */
console.log('*** TASK 3 ***');

function studentsGrade (name, points) {

    var result = '';

    for (var i = 0; i < name.length; i++) {
        if (points[i] > 50 && points[i] < 61) {
            result += name[i] + ' acquired ' + points[i] + ' points and earned 6. ';
        } else if (points[i] > 60 && points[i] < 71) {
            result += name[i] + ' acquired ' + points[i] + ' points and earned 7. ';
        } else if (points[i] > 70 && points[i] < 81) {
            result += name[i] + ' acquired ' + points[i] + ' points and earned 8. ';
        } else if (points[i] > 80 && points[i] < 91) {
            result += name[i] + ' acquired ' + points[i] + ' points and earned 9. ';
        } else if (points[i] > 90 && points[i] <= 100) {
            result += name[i] + ' acquired ' + points[i] + ' points and earned 10. ';
        } else {
            result += name[i] + ' acquired ' + points[i] + ' points and failed to complete the exam. ';
        }
    }
    return result;
}

console.log(studentsGrade([ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]));

console.log('\n');

/* 4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
 */

console.log('*** TASK 4 ***'); 

function f (array) {
    
    var newArray = [];
    var pos = 0;
    var max = array[0];
    var min = array[0];

    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }

    for (var j = 0; j < array.length; j++) {
        for (var k = 0; k < array.length; k++) {
            if (array[k] !== null) {
                if (array[k] < min) {
                    min = array[k];
                    pos = k;
                }
            }
        }
        newArray[j] = min * 2;
        array[pos] = null;
        min = max; 
    }
    return newArray;
}

console.log(f([ 13, 11, 15, 5, 6, 1, 8, 12 ]));


  console.log('\n');

/* 5. (skip :))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
 */

console.log('*** TASK 5 ***');

function sort (arr) {

    var newArr = [];
    var position = 0;
    var max = arr[0];
    var min = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    for (var j = 0; j < arr.length; j++) {
        for (var k = 0; k < arr.length; k++) {
            if (arr[k] !== null) {
                if (max < arr[k]) {
                    max = arr[k];
                    position = k;
                }
            }
        }
        newArr[j] = max;
        arr[position] = null;
        max = min;
    }
    return newArr;
}

console.log(sort([13, 11, 15, 5, 6, 1, 8, 12]));

console.log('\n');

/* 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 
and subtracts all the odd numbers 1 to 500 from the calculated sum. 
The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000
 */
console.log('*** TASK 6 ***');

function calculated (limit_1, limit_2) {

    var a = 0;
    var b = 0;
    var c = 12.5;
    var result;

    for (var i = 1; i <= limit_1; i++) {
        if (i % 2 === 0) {
            a += i;
        }
    }
    for (var j = 1; j <= limit_2; j++) {
        if (j % 2 !== 0) {
            b += j;
        }
    }
    result = (a - b) * c;
    return result;
}

console.log(calculated(1000, 500));

console.log('\n');

/* 7. Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) 
in the array and create a new string from them. Print it out in the console.

Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
Output: AnStJoJoDaMa
*/
console.log('*** TASK 7 ***');

function take2Letters (array) {

    var str = '';

    for (var i = 0; i < array.length; i++) {
        if (array[i].length > 1) {
            for (var j = 0; j < 2; j++) {
                str += array[i][j];
            }
        }
    }
    return str;
}

console.log(take2Letters(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]));

console.log('\n');

/* 8. Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
 */
console.log('*** TASK 8 ***');

function reverse (str) {

    var newStr = '';

    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverse('Belgrade Institute of Technology'));

console.log('\n');

/* 9. Write a program that displays all the combinations of two numbers between 1 and 7. 
Don't display two of the same numbers at the same time. Display the number of possible combinations, 
as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
*/

console.log('*** TASK 9 ***');

function combinations (a, b) {

    var result = '';
    var count = 0;

    for (var i = a; i <= b; i++) {
        for (var j = a; j <= b; j++) {
            if (i !== j) {
                result += ' (' + i + ',';
                result += j + ')';
                count ++;
            }
        }
    }
    return result + ' The number of possible combinations is ' + count + '.';
}

console.log(combinations(1, 7));

console.log('\n');

/* 10. Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false
 */

console.log('*** TASK 10 ***');

function primeNumber (number) {

    var result = '';

    if (number % 2 === 0 || number % 3 === 0) {
        result = 'false';
    } else {
        result = 'true';
    }
    return result;
}

console.log(primeNumber(17));
console.log(primeNumber(15));

console.log('\n');

/* 11. Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true
*/

console.log('*** TASK 11 ***');
  

console.log('\n');

/* 12. Write a program that calculates the greatest common divisor of two integers. 
Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9
*/

console.log('*** TASK 12 ***');

function greatestDivisor (x, y) {
    
    var result = 0;

    for (var i = x; i > 0; i--) {
        if (x % i === 0 && y % i === 0) {
            result = i;
            break;
        }
    }
    return result;
}

console.log(greatestDivisor(192, 42));
console.log(greatestDivisor(81, 9));