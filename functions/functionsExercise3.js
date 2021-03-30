/* 1. Write a program to insert a string within a string at a particular position (default is 1,
beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string" */

console.log('***** TASK 1 *****');

function joinTo (str, insert, index) {
    var newStr = '';
    var newStr2 = '';
    for (var i = 0; i < str.length; i++) {
        if (i < index) {
            newStr += str[i];
        } else if (i === index) {
            newStr += insert + ' ';
        }
    }
    for (var j = 0; j < str.length; j++) {
        if (j >= index) {
            newStr2 += str[j];
        }
    }
    return newStr + newStr2;
}

console.log(joinTo("My random string", 'JS', 10));

console.log('\n');

/* 2. Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.  [NaN, 0, 15, false, -22, '', undefined, 47, null] */

console.log('***** TASK 2 *****');

function join (arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === false || arr[i] === null) {
            str = str;
        } else if (isFinite(arr[i]) === true) {
            str += arr[i];
        }    
    }
    return str;
}

console.log(join ([NaN, 0, 15, false, -22, '', undefined, 47, null]));

console.log('\n');

/* 3. Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47] */

console.log('***** TASK 3 *****');

function filter (array) {
    var filterArr = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] === false || array[i] === null || array[i] === '' || array[i] === 0) {
            filterArr = filterArr;
        } else if (isFinite(array[i]) === true ) {
            filterArr[filterArr.length] = array[i]
        }
    }
    return filterArr;
}

console.log(filter([NaN, 0, 15, false, -22, '', undefined, 47, null]));

console.log('\n');

/* 4. Write a function that reverses a number. The result must be a number.
12345 -> 54321 // Output must be a number */

console.log('***** TASK 4 *****');

function reversNum (num) {
    var strNum = '';
    num = num + '';
    for (var i = num.length - 1; i >= 0; i--) {
        strNum += num[i];
    }
    return parseInt(strNum);
}

console.log(reversNum(12345));

console.log('\n');

/*  5. Write a function to get the last element of an array. Passing a parameter 'n' will return the
last 'n' elements of the array.
[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]*/

console.log('***** TASK 5 *****');

function lastEl (arr, n) {
    var elArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (i >= arr.length - n) {
            elArr[elArr.length] = arr[i];
        }
    }
    return elArr;
}

console.log(lastEl([7, 9, 0, -2], 2));

console.log('\n');

/* 6. Write a function to create a specified number of elements with pre-filled numeric value
array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] */

console.log('***** TASK 6 *****');

function createNewArr (insert, num) {
    var specArr = [];
    for (var i = 0; i < num; i++) {
        specArr[specArr.length] = insert;
    }
    return specArr;
}

console.log(createNewArr(0, 6));

console.log('\n');

/* 7. Write a function that says whether a number is perfect.
28 -> 28 is a perfect number.

Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
(including itself).
E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.

Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128. */

console.log('***** TASK 7 *****');

function perfectNum (num) {
    var count = 0;
    var result = '';
    for (var i = 1; i < num; i++) {
        if (num % i === 0) {
            count += i;
        }
    }
    
    if (count === num) {
        result = num + " is a perfect number."
    } else {
        result = num + " isn't a perfect number."
    }
    return result;
}

console.log(perfectNum(8128));

console.log('\n');

/* 8. Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times" */

console.log('***** TASK 8 *****');

function findWord (stri, word) {
    
    var count_1 = 0;
    var count_2 = 0;
    var result;
    for (var i = 0; i < stri.length; i++) {
        if (stri[i] === word[0]){
            for (var j = i; j < i + word.length; j++) {
                if (stri[j] === word[j - i]) {
                    count_1 ++;
                }
                if (count_1 === word.length) {
                    count_2 ++;
                }
            }
            count_1 = 0;
        }
    }
    result = word + ' was found ' + count_2 + ' times';
    return result
}

console.log(findWord('aa bb cc dd aa', 'aa'));

console.log('\n');

/* 9. Write a function to hide email address.

"myemailaddress@bgit.rs" -> "mye...@bgit.rs" */

console.log('***** TASK 9 *****');

/* FIRST SOLUTION */

function hideEmail (email) {
    var find_A = 0;
    var hiddenEmail = '';

    for (var i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            find_A = i;
        }
    }

    for (var j = 0; j < email.length; j++) {
        if (j >= 3 && j < find_A) {
            hiddenEmail += '.';
        } else {
            hiddenEmail += email[j];
        }
    }
    return hiddenEmail;
}

var secretEmail = hideEmail("myemailaddress@bgit.rs");
console.log(secretEmail);
console.log('\n');

/*********Second solution with 3 point '...' **************/

console.log('SECOND SOLUTION');

function hideEmailSec (email) {
    var findMonkey = 0;
    var hiddenEmail_1 = '';
    var hiddenEmail_2 = '';

    for (var i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            findMonkey = i;
        }
    }

    for (var j = 0; j < email.length; j++) {
        if (j < 3) {
            hiddenEmail_1 += email[j];
        } else if (j >= findMonkey) {
            hiddenEmail_2 += email[j];
        }
    }
    return hiddenEmail_1 + '...' + hiddenEmail_2;
}

var secretEmail = hideEmailSec("nikola.drcalic@gmail.com");
console.log(secretEmail);

console.log('\n');

/* 
10. Write a program to find the most frequent item of an array.
[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
 */

console.log('***** TASK 10 *****');

function frequent (array) {
    
    var mostFrequentEl;
    var count = 0;
    var mostCount = 1;
    
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                count ++;
            }
        }
        if (mostCount < count) {
            mostCount = count;
            mostFrequentEl = array[i];
        }
        count = 0;
    }
    return mostFrequentEl + ' -> ' + mostCount + ' times.'
}

console.log(frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));