/*for (var x = 0; x <= 10; x++) {
  console.log(x * x);
}
*/

/* 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen. */
console.log("****TASK 1****");
for (var i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " even");
  } else {
    console.log(i + " odd");
  }
}

/* 2. Write a program to sum the multiples of 3 and 5 under 1000. */
console.log("****TASK 2****");
var sum = 0;
for (var i = 0; i < 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);

/* 3. Write a program to compute the sum and product of an array of integers. */
console.log("****TASK 3****");
var arr = [10, 2, 8, 4, 5];
var total = 0;

for (i = 0; i < arr.length; i++) {
  total += arr[i];
}
console.log("sum " + total);

total = 1;
for (i = 0; i < arr.length; i++) {
  total *= arr[i];
}
console.log("product " + total);
/* 4. Write a program which prints the elements of the following array as a single string. */
console.log("****TASK 4****");
var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
var y = "";
for (var i = 0; i < x.length; i++) {
  y = x[i];
  console.log(y);
}

/* 5. Write a program that prints the elements of the following array.*/
console.log("****TASK 5****");
var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
];

for (var i = 0; i < a.length; i++) {
  for (var j = 0; j < a[i].length; j++) {
    console.log(a[i][j]);
  }
}

/* 6. Write a program that outputs the sum of squares of the first 20 numbers. */
console.log("****TASK 6****");
for (var i = 0; i <= 20; i++) {
  console.log(i * i + 2 * i * i + i * i);
}

/* 7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade. */
console.log("****TASK 7****");
var students = [80, 77, 88, 95, 68];
var averageGrades = 0;

for (var i = 0; i < students.length; i++) {
  averageGrades += students[i] / 5;
}
console.log("Average mark of studens is " + averageGrades);

if (averageGrades < 60) {
  console.log("Grade is F");
} else if (averageGrades < 70) {
  console.log("Grade is D");
} else if (averageGrades < 80) {
  console.log("Grade is C");
} else if (averageGrades < 90) {
  console.log("Grade is B");
} else if (averageGrades < 100) {
  console.log("Grade is A");
}

/* 8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers
divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your
program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print
"Fizz" or "Buzz" for numbers divisible by only one of those). */
console.log("****TASK 8****");

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0 || i % 5 === 0) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    }
  } else {
    console.log(i);
  }
}
