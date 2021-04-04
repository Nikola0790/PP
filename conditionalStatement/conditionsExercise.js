/* 1. Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign. 
Sample numbers: 3, -7, 2
Output: The sign is -
*/
var d = 3;
var f = -7;
var g = 2;

if (d + f + g > 0) {
  console.log("The sign is +");
} else {
  console.log("The sign is -");
}

/* 2. Write a conditional statement to find the largest of five numbers. Display the result in the
console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0 */

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var f = -1;

if (a >= b && a >= c && a >= d && a >= f) {
  result = a;
} else if (b >= a && b >= c && b >= d && b >= f) {
  result = b;
} else if (c >= a && c >= b && c >= d && c >= f) {
  result = c;
} else if (d >= a && d >= b && d >= c && d >= f) {
  result = d;
} else {
  result = f;
}

console.log(result);

/* 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4
Output : 4, 0, -1 */

a = 0;
b = -1;
c = 4;

if (a > b && a > c) {
  if (b > c) {
    console.log(a, b, c);
  } else {
    console.log(a, c, b);
  }
} else if (b > a && b > c) {
  if (a > c) {
    console.log(b, a, c);
  } else {
    console.log(b, c, a);
  }
} else if (c > a && c > b) {
  if (a > b) {
    console.log(c, a, b);
  } else {
    console.log(c, b, a);
  }
}

/* 4. Write a program to check if the variable is a number and if it’s a number, check if it is
divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10           Sample input: 7
Output: 10 / 2 = 5         Output: X */

result = "";
a = 10;
b = 7;

if (typeof a === "number") {
  if (a % 2 === 0) {
    result = a / 2;
  } else {
    result = "X";
  }
}

console.log(result);

if (typeof b === "number") {
  if (b % 2 === 0) {
    result = b / 2;
  } else {
    result = "X";
  }
}

console.log(result);

/* 5. Write a program that compares two numbers and displays the larger. Display the result in
the console. */
var a = 2;
var b = 7;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

/* 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F */

var f = "";
var c = 60;

if (typeof c === "number") {
  f = (9 * c) / 5 + 32;
  console.log(`${c}C is ${f}F`);
} else {
  c = ((f - 32) * 5) / 9;
  console.log(`${f}F is ${c}C`);
}

/* 7. Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11           Sample Input: 32
Output : 2                 Output : 38 
*/

var a = 11;
var b = 32;
var c = 13;

if (c < a) {
  console.log((a - c) * 2);
} else {
  console.log(c - a);
}

if (c < b) {
  console.log((b - c) * 2);
} else {
  console.log(c - b);
}

/* 8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12, 5               Sample Input: 8, 8
Output : 17                      Output : 48 
*/

a = 12;
b = 5;

if (a === b) {
  console.log((a + b) * 3);
} else {
  console.log(a + b);
}

a = 8;
b = 8;

if (a === b) {
  console.log((a + b) * 3);
} else {
  console.log(a + b);
}

/* 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54               Sample Input: 6,50                Sample Input: 40,10
Output : -                       Output : true                     Output : true 
*/

a = 5;
b = 54;

if (a === 50 || b === 50 || a + b === 50) {
  console.log("true");
} else {
  console.log("-");
}

a = 6;
b = 50;

if (a === 50 || b === 50 || a + b === 50) {
  console.log("true");
} else {
  console.log("-");
}

a = 40;
b = 10;

if (a === 50 || b === 50 || a + b === 50) {
  console.log("true");
} else {
  console.log("-");
}

/* 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13               Sample Input: 34                  Sample Input: 256
Output : -                     Output : 20 ⇔ 100                Output : 100 ⇔ 400 
*/

a = 13;
b = 34;
c = 256;

if (a > 20 && a < 100) {
  console.log("20 <> 100");
} else if (a > 100 && a < 400) {
  console.log("100 <> 400");
} else {
  console.log("-");
}

if (b > 20 && b < 100) {
  console.log("20 <> 100");
} else if (b > 100 && b < 400) {
  console.log("100 <> 400");
} else {
  console.log("-");
}

if (c > 20 && c < 100) {
  console.log("20 <> 100");
} else if (c > 100 && c < 400) {
  console.log("100 <> 400");
} else {
  console.log("-");
}
