/* 1. Write a program that calculates the maximum of two given numbers. */
console.log('*** Task 1. ***');

function max (a, b) {
    if (a > b) {
        var maxNum = a;
    }else if (b > a ) {
        var maxNum = b;
    }else {
        var maxNum = 'The numbers is equal.'
    }
    return maxNum;
}

var funct = max (6, 6);
console.log(funct);

console.log('\n');
/* 2. Write a program that checks if a given number is odd. */
console.log('*** Task 2. ***');
var a = '';

function odd (num) {
    if (num % 2 === 0) {
        a = 'Number isn\'t odd.'
    }else {
        a = 'Number is odd.'
    }
    return a;
}

var check = odd (5);
console.log(check);

console.log('\n');
/* 3. Write a program that checks if a given number is a three digit long number. */
console.log('*** Task 3. ***');

var c = '';

function checkNum (b) {
        if ( b > 99 && b < 1000) {
            c = "The number is three digit long number."
        }else {
            c = "The number isn\'t three digit long number."
        }
        return c;
}

var check = checkNum (756);
console.log(check);

console.log('\n');
/* 4. Write a program that calculates an arithmetic mean of four numbers. */
console.log('*** Task 4. ***');

function aritMean (a, b, c, d) {
    x = (a + b + c + d) / 4;
    return x;
}

var numbers = aritMean (1, 2, 3, 6);
console.log(numbers);

console.log('\n');

/* 5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
*   *
*   *
*   *
*****
*/
console.log('*** Task 5. ***');

var stars = '';

function square (num) {
    for (var i = 0; i < num; i++) {
        if (i === 0 || i === num - 1) {
            for (var j = 0; j < num; j++) {
               if (j === num - 1) {
                   stars += '* \n';
                } else {
                    stars += '*';
                }
            }
        } else {
            for (var j = 0; j < num; j++) {
                if (j === 0) {
                    stars += '*';
                } else if (j === num - 1) {
                    stars += '* \n';
                } else {
                    stars += ' ';
                } 
            }
        }
    }
    return stars;
}
var s = square (5);
console.log(s);

/* *********** Better solution ************ */
console.log('***** Better solution *****');

function makeSquare (n) {
    var result = '';
    var space = ' ';
    var star = '*';
    var newLine = '\n';

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i === 0 || i === n-1 || j === 0 || j === n-1) {
                result += star;
            }else {
                result += space;
            }
        }
        result += newLine;
    }
    return result;
}

console.log(makeSquare(5));

console.log('\n');
/*
6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * * */
console.log('*** Task 6. ***');

function draw (a, b, c) {
    var lA = '';
    for (var i = 0; i < a; i++) {
        lA += '*';
    }
    
    var lB = '';
    for (var i = 0; i < b; i++) {
        lB += '*';
    }

    var lC = '';
    for (var i = 0; i < c; i++) {
        lC += '*';
    }
    return lA + '\n' + lB + '\n' + lC + '\n';
}

var f = draw (5, 3, 7);
console.log(f);

/* *********** Better solution ************ */
console.log('***** Better solution *****');

function makeChart () {
    var result = '';

    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i]; j++) {
            result += '*';
        }
        result += '\n';
    }
    return result;
}

console.log(makeChart(5,3,7));

console.log('\n');
/* 7. Write a program that calculates a number of digits of a given number. */
console.log('*** Task 7. ***');

function digits (n) {
    var str = n + '';
    return x = str.length;
}

console.log(digits(5467));

console.log('\n');

/* 8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3 */
console.log('*** Task 8. ***');

var e = 7;
var res = 0;

function app (array) {
    for (var i = 0; i < array.length; i++){
        if (array[i] === e) {
            res += 1;
        }else {
            res = res
        }
    }
    return res;
}

var fun = app ([2, 4, 7, 8, 7, 7, 1]);
console.log(fun);

console.log('\n');

/* 9. Write a program that calculates the sum of odd elements of a given array. */
console.log('*** Task 9. ***');

var numOdd = 0;

function sumOdd (arr) {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            numOdd = numOdd;
        }else {
            numOdd += arr[i]
        }
    }
    return numOdd;
}

var func = sumOdd ([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(func);

console.log('\n');
/* 10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A. */
console.log('*** Task 10. ***');

var calc = 0;

function appearances (m) {
    for (var i = 0; i < m.length; i++) {
        if (m[i] === 'a' || m[i] === 'A') {
            calc += 1;
        }else {
            calc = calc;
        }
    }
    return calc;
}

var result = appearances ('Bananas AND Pineapple');
console.log(result);

console.log('\n');
/* 11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc. */
console.log('*** Task 11. ***');

var d = '';

function concat (a, b) {
    for (var i = 0; i < b; i++) {
        d += a;
    }
    return d;
}

var func = concat ('abc', 4);
console.log(func);

console.log('\n');