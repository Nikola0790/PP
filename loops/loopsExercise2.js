/* 1. Write a program that checks if a given element e is in the array a.

Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input: e = 3, a = [5, -4.2, 18, 7]
Output: no */
console.log("*** Task 1 ***");
var e = 3;
var a = [5, -4.2, 3, 7];
var answ = 0

for (i = 0; i < a.length; i++){
 if (e === a[i]){
  answ += 1;
  } 
}
if (answ > 0) {
  console.log('Yes');
}else {
  console.log('No');
}


/* 2. Write a program that multiplies every positive element of a given array by 2.

Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] 
*/

console.log("*** Task 2 ***");

var array = [-3, 11, 5, 3.4, -8];
var outArr = [];

for (var i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    outArr[i] = array[i] * 2;
  } else {
    outArr[i] = array[i];
  }
}
console.log(outArr);

/* 3. Write a program that finds the minimum of a given array and prints out its value and
index.

Input array: [4, 2, 2, -1, 6]
Output: -1, 3
 */
console.log("*** Task 3 ***");

var arr3 = [4, 2, 2, -1, 6];
var min = arr3[0];
var x = 0;

for (var i = 0; i < arr3.length; i++) {
  if (arr3[i] < min) {
    min = arr3[i];
  }else {
    min = min;
  }
}

for (var j = 0; j < arr3.length; j++) {
  if (min === arr3[j]) {
    x = j;
  }
}
console.log(min, x);
/* 4. Write a program that finds the first element larger than minimum and prints out its value.

Input array: [4, 2, 2, -1, 6]
Output: 2 
*/
console.log("*** Task 4 ***");

arr4 = [4, 2, 2, -1, 6];
var min1 = arr4[0];

for (var i = 0; i < arr4.length; i++) {
  if (arr4[i] < min1) {
    min1 = arr4[i];
  }
}

var min2 = arr4[0];
for (var j = 0; j < arr4.length; j++) {
  if (arr4[j] < min2 && arr4[j] !== min1) {
    min2 = arr4[j];
  }
}
console.log(min2);
/* 5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 
*/
console.log("*** Task 5 ***");
var arr5 = [3, 11, -5, -3, 2];
var sumPositivNum = 0;

for (var i = 0; i < arr5.length; i++) {
  if (arr5[i] > 0) {
    sumPositivNum += arr5[i];
  }
}
console.log(sumPositivNum);
/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
 */

console.log("*** Task 6 ***");

var arr6 = [2, 4, -2, 7, -2, 4, 2];
var arr6Second = [];
var count = 0;

for (var i = 0; i<arr6.length; i++) {
    arr6Second[i] = arr6[arr6.length-1-i]
}
console.log(arr6);
console.log(arr6Second);

for (var j = 0; j<arr6.length; j++) {
  if (arr6[j] === arr6Second[j]) {
    count = count +1;
  }
}if (count === arr6.length) {
  console.log('the array is symmetric');
}else {
  console.log('The array isn\'t symmetric.');
}
/* 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
 */
console.log("*** Task 7 ***");
var arr7 = [4, 5, 6, 2];
var arr7A = [3, 8, 11, 9];
var interTw = [];

for (var i = 0; i < arr7.length; i++) {
  interTw[interTw.length] = arr7[i];
  interTw[interTw.length] = arr7A[i];
}
console.log(interTw);

/* 8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] 
*/
console.log("*** Task 8 ***");

var arr8 = [4, 5, 6, 2];
var arr8A = [3, 8, 11, 9];
var arr8B = []

for (var i = 0; i < arr8.length; i++){
  arr8B[i] = arr8[i]
}

for (var j = 0; j < arr8A.length; j++) {
  arr8B[arr8.length + j] = arr8A[j];
}
console.log(arr8B);

/* 9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] */

console.log("*** Task 9 ***");
var a = [4, 6, 2, 8, 2, 2]
var e = 2
var del = [];

for (var i = 0; i < a.length; i++) {
  if (e !== a[i]) {
    del[del.length] = a[i];
  }
}
console.log(del);

/* 10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */
console.log("*** Task 10 ***");

var e = 78;
var p = 0;
var a = [2, -2, 33, 12, 5, 8];
var b = [];

if (p < a.length) {
  for (var i = 0; i < a.length && i <= p; i++) {
    if(p === i) {
      b[i] = e;
    } else {
      b[i] = a[i];
    }
  }
  for (var j = 0; j < a.length - p; j++) {
    b[b.length] = a[p+j];
  }
  console.log(b);
}else {
  console.log('Error');
}
