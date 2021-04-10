/* 1. Write a function to count vowels in a provided string. 
Vowels are a, e, i, o, and u as well as A, E, I, O, and U. */

console.log('*** Task 1 ***');

function countVowels (string) {
    
    var count = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' || string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O' || string[i] === 'E' || string[i] === 'U') {
            count ++;
        }
    }
    return count;
}

console.log(countVowels('Nikola like football gAmE.'));

console.log('\n');

/****** SWITCH solution ************/

console.log('*** Switch solution ***');

function countV (string_1) {
    var count = 0;
    for (var j = 0; j < string_1.length; j ++) {
        switch (string_1[j]) {
            case 'a':
                count ++
            break;
            case 'e':
                count ++
            break;
            case 'i':
                count ++
            break;
            case 'o':
                count ++
            break;
            case 'u':
                count ++
            break;
            case 'A':
                count ++
            break;
            case 'E':
                count ++
            break;
            case 'I':
                count ++
            break;
            case 'O':
                count ++
            break;
            case 'U':
                count ++
            break;
        }
    }
    return count;
}

console.log(countV('Nikola like football AND race games'));

console.log('\n');

/* 2. Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
*/


console.log('*** Task 2 ***');

function combinesArr (arr1, arr2) {

    var combArr = [];

    for (var i = 0; i < arr1.length; i++) {
        combArr[combArr.length] = arr1[i];
        combArr[combArr.length] = arr2[i];
    }
    return combArr;
}

console.log(combinesArr(['a','b','c'], [1,2,3]));

console.log('\n');

/* 3.  Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
*/

console.log('*** Task 3 ***');

function rotate (array, k) {

    var rotateArr = [];

    for (var i = 0; i < array.length; i++) {
        if (i >= k) {
            rotateArr[rotateArr.length] = array[i];
        }
    }
    for (var j = 0; j < array.length; j++) {
        if (j < k) {
            rotateArr[rotateArr.length] = array[j];
        }
    }
    return rotateArr;

}

console.log(rotate ([1,2,3,4,5,6], 2));

console.log('\n');

/* 4. Write a function that takes a number and returns array of its digits. */

console.log('*** Task 4 ***');

function returnArray (num) {

    var arrDigits = [];
    var strNum = '';
    strNum += num;

    for (var i = 0; i < strNum.length; i++) {
        arrDigits[arrDigits.length] = strNum[i];
    }
    return arrDigits;
}

console.log(returnArray(15));

console.log('\n');

/* 5. Write a program that prints a multiplication table for numbers up to 12. */

console.log('*** Task 5 ***');

function multipliTable (num) {

    var result = '';

    for (var i = 1; i <= num; i++) {
        for (var j = 1; j <= num; j++) {
            result += (i + '*' + j + '=' + i * j + ' ');
        }
    }
    return result;
}

console.log(multipliTable(12));

console.log('\n');

/* 6. Write a function to input temperature in Centigrade and convert to Fahrenheit. */

console.log('*** Task 6 ***');

function convertTemp (celsius) {

    var fahrenheit;

    fahrenheit = (celsius * (9/5)) + 32;
    return fahrenheit;
}

console.log(convertTemp(10));

console.log('\n');

/* 7. Write a function to find the maximum element in array of numbers. 
Filter out all non-number elements. */

console.log('*** Task 7 ***');

function maxAndOutNan (arr) {

    var max = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (isNaN(arr[i]) === false) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }        
    }
    return max;
}

console.log(maxAndOutNan([1, 2, 3, 4, 5, 'Nikola', undefined, 12, 11, 3]));

console.log('\n');

/*8. Write a function to find the maximum and minimum elements. Function returns an array.*/

console.log('*** Task 8 ***');

function maxAndMin (arr) {

    var max = arr[0];
    var min = arr[0];
    var arrayRe = [];

    for (var i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    arrayRe[arrayRe.length] = min;
    arrayRe[arrayRe.length] = max;
    return arrayRe;
}

console.log(maxAndMin([5, 7, 9, 10, 15, 20, 21, 26, 101, 57]));

console.log('\n');

/* 9. Write a function to find the median element of array. */

console.log('*** Task 9 ***');

function median (array) {

    var max = array[0];
    var min = array[0];
    var position = 0;
    var newArr = [];
    var ind = 0;
    var med = 0;

    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    for (var j = 0; j < array.length; j++) {
        for (var k = 0; k < array.length; k++) {
            if (array[k] !== null) {
                if (min > array[k]) {
                    min = array[k];
                    position = k;
                }
            }
        }
        newArr[j] = min;
        array[position] = null;
        min = max;
    }
    
    //console.log(newArr);

    if (newArr.length % 2 === 0) {
        ind = newArr.length / 2;
        med = (newArr[ind] + newArr[ind - 1]) / 2;
    } else {
        med = (newArr[newArr.length / 2 - 0.5])
    }
    return med + ' is median';
}

console.log(median([2, 1, 5, 3, 4, 6, 7]));

console.log('\n');

/* 10. Write a function to find the element that occurs most frequently. */

console.log('*** Task 10 ***');

function occursMostFreq (arr) {

    var mostFreq, count, position, x;
    x = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] !== null) { 
                if (arr[i] === arr[j]) {
                    count ++;
                    position = i;
                }
            }
        }
        if (count > x) {
            mostFreq = arr[i];
            x = count;
            arr[position] = null;
        }
        count = 0;    
    }
    return mostFreq + ' is MODE (the most frequently number)';
}

console.log(occursMostFreq([10, 11, 9, 3, 15, 35, 27, 35, 9, 35, 7, 7, 7, 14, 35, 14]));

console.log('\n');

/* 11. Write a function to find and return the first, middle and last element of an array if the array
has odd number of elements. If number of elements is even, return just the first and the
last. In other cases (empty array), input array should be returned. */

console.log('*** Task 11 ***');

function retFirMidLast (array) {

    var el;

    if (array.length === 0) {
        el = array;
    } else if (array.length % 2 === 0) {
        el = 'first element - ' + array[0] + ' and last element - ' + array[array.length - 1];
    } else if (array.length % 2 !== 0) {
        el = 'first element - ' + array[0] + ',' + ' middle element - ' + array[array.length / 2 - 0.5] + ' and last element - ' + array[array.length - 1];
    } 
    return el;
}

console.log(retFirMidLast([10, 11, 9, 3, 15, 35, 27, 7, 14]));

console.log('\n');

/* 12. Write a function to find the average of N elements. Make the function flexible to receive
dynamic number or parameters. */

console.log('*** Task 12 ***');

function average () {

    var x = 0;
    var y;

    for (var i = 0; i < arguments.length; i++) {
        x += arguments[i];
    }
    y = x / arguments.length;
    return y;
}

console.log(average(1, 2, 3, 4, 5));

console.log('\n');

/* 13. Write a function to find all the numbers greater than the average.*/

console.log('*** Task 13 ***');

function greaterOfAverage () {
    
    var average; 
    var x = 0; 
    var y = '';

    for (var i = 0; i < arguments.length; i++) {
        x += arguments[i];
    }
    average = x / arguments.length;

    for (var j = 0; j < arguments.length; j++) {
        if(arguments[j] > average) {
            y += arguments[j] + ' ';
        }
    }
    return y;
}

console.log(greaterOfAverage(10, 15, 20, 5, 6, 7, 2, 25, 11));

console.log('\n');

/* 14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
square of the height (in meters). Write a function that takes two parameters, weight and
height, computes the BMI, and prints the corresponding BMI category:
● Starvation: less than 15
● Anorexic: less than 17.5
● Underweight: less than 18.5
● Ideal: greater than or equal to 18.5 but less than 25
● Overweight: greater than or equal to 25 but less than 30
● Obese: greater than or equal to 30 but less than 40
● Morbidly obese: greater than or equal to 40 */

console.log('*** Task 14 ***');

var bmi = function (weight, height) {

    var calc = weight / (height * height);
    var result;
    
    switch (true) {
        case calc < 15:
            result = 'Starvation'
            break;
        case calc < 17.5:
            result = 'Anorexic'
            break;
        case calc < 18.5 :
            result = 'Underweight'
            break;
        case calc >= 18.5 && calc < 25:
            result = 'Ideal'
            break;
        case calc >= 25 && calc < 30:
            result = 'Overweight'
            break;
        case calc >= 30 && calc < 40:
            result = 'Obese'
            break;
        case calc >= 40:
            result = 'Morbildly obese'
            break;
    }
    return result;
}

console.log(bmi(80, 1.83));

console.log('\n');

/* 15. Write a function that takes a list of strings and prints them, one per line, in a rectangular
frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets
printed as:

*********
* Hello *
* World *
* in    *
* a     *
* frame *
********* 
*/

console.log('*** Task 15 ***');

function print (array) {

    var result = ''; 
    var star = '*';
    var newLine = '\n';
    var space = ' ';

    for (var i = -1; i <= array.length; i++) {
        for (var j = -2; j <= array.length +1; j++) {
            if (i === -1 || i === array.length || j === -2 || j === array.length +1) {
                result += star;
            } else if (j >= 0 && j < array[i].length) {
                result += array[i][j];
            } else {
                result += space;
            }
        }
        result += newLine;
    }
    return result;
}

console.log(print(["Hello", "World", "in", "a", "frame"]));