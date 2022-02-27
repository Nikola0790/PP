/* 1. Find Number of Digits in Number
      Create a function that will return an integer number corresponding to the amount of digits in the given integer num. */
function num_of_digits(num) {
  let numbers = num.toString().split("");
  let count = 0;
  let checkedNumbers = numbers.filter((num, i) => {
    if (num !== ".") {
      return num;
    } else {
      count = i;
    }
  });

  if (count === 0) {
    const result = `Number of digits ${checkedNumbers.length}`;
    return result;
  }

  const result = `Number of digits ${checkedNumbers.length}, ${
    checkedNumbers.length - count
  } decimals`;
  return result;
}

console.log(num_of_digits(145793636.51));

/* 2. *************** */

function reversed(str) {
  return str.split("").reverse().join("");
}

console.log(reversed("radar"));

/* 3. Build a function that returns an array of integers from n to 1 where n>0. Example : n=5 --> [5,4,3,2,1] */

function reversedSequence(num) {
  let arr = [];
  if (num > 0) {
    for (let i = num; i > 0; i--) {
      arr[arr.length] = i;
    }
  } else {
    return "Number must be higher than 0";
  }

  return arr;
}

let res = reversedSequence(5);
console.log(res);


/* 4. You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N. */

/* 5. Implement a function that adds two numbers together and returns their sum in binary. 
The conversion can be done before, or after the addition.
The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))
1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)*/

function convertToBinary(inp1, inp2) {
  let binary = '';
  let sum = inp1 + inp2;
  for (let i = sum / 2; i >= 0.5; i = i / 2) {
    let sum2 = i.toString().split('.');
    i = Math.floor(i);
    if (sum2[1] === undefined) {
      binary += 0;
    } else {
      binary += 1;
    }
  }
  let result = binary.toString().split("").reverse().join("");
  return result;
}

let resultBinary = convertToBinary(150, 5);
console.log(resultBinary);

/*  Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:

Sam Harris => S.H
patrick feeney => P.F */


/*  You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. 
You will return true if it is valid, or false if it is not.
For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"
The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

Examples
"abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
"abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
"123abc!" is a valid word because all of the characters only appear once in the word. */

/*  The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

The function should return an array where
coins[0] = pennies ==> $00.01
coins[1] = nickels ==> $00.05
coins[2] = dimes ==> $00.10
coins[3] = quarters ==> $00.25

So for example:
coinCombo(6) --> [1, 1, 0, 0] */

/*  You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] */


/* Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead. */

function confirmEnding(str, target) {
  let count = 0;
  let num1 = str.length - target.length;
  let num2 = str.length;
  let target1 = str.slice(num1 , num2);
  for(let i = 0; i < target1.length; i++) {
    if(target1[i] === target[i]) {
      count++;
    }  
  }
  if (count === target.length) {
    return "true"
  } 
  return "false"
}

console.log(confirmEnding("Open sesame", "sage"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("Abstraction", "action"));

// solve with substring()
function confirmEnding(str, target) {
  let num1 = str.length - target.length;
  let num2 = str.length;
  let target1 = str.substring(num1 , num2);
  if (target1 === target) {
    return true;
  }
  return false;
}

console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"))

/* Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined. */

function findElement(arr, func) {
  let check = undefined;
  for (let i = 0; i < arr.length; i++) {
    if(func(arr[i]) === true) {
      return arr[i];
    }
  }
  return check;
}


console.log(findElement([1, 3, 5, 9], num => num % 2 === 0));

/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of. */
function titleCase(str) {
  let newStr = "";
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if(j === 0 && j + 1 === words[i].length) {
        newStr += words[i][j].toUpperCase() + " ";
      } else if (j === 0) {
        newStr += words[i][j].toUpperCase();
      } else if (i + 1 === words.length) {
        newStr += words[i][j].toLowerCase();
      } else if (j + 1 === words[i].length) {
        newStr += words[i][j].toLowerCase() + " ";
      } else {
        newStr += words[i][j].toLowerCase();
      }
    }
  }
  return newStr;
}

console.log(titleCase("I'm a little tea pot"));

/* You are given two arrays and an index. Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs. */

function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice(n);
  let newArr2 = arr2.slice(0, n);
  let conc = newArr2.concat(arr1, newArr);
  return conc;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

/* Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1). */

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((firstEl, secondEl) => {
    return firstEl - secondEl;
  });
  return arr.indexOf(num);
}

console.log(getIndexToIns([3, 10, 5], 3));

/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.*/

function mutation(arr) {

  let sameLetter = "";
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr[1].length; j++) {
      if (arr[0][i].toLowerCase() === arr[1][j].toLowerCase()) {
        sameLetter += arr[0][i].toLowerCase();
      }
    }
  }
 
  if (sameLetter === "") {
    return false;
  }
  console.log(sameLetter);
  for (let k = 0; k < arr[1].length; k++) {
    let count = 0;
    for (let l = 0; l < sameLetter.length; l++) {
      if (sameLetter[l] === arr[1][k].toLowerCase()) {
        count++;
      } else {
        count = count;
      }
    }
    if (count === 0) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["Mary", "Army"]));

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i = i + size){
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));

/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order. */

function diffArray(arr1, arr2) {
  const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
      let count = 0;
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          count++;
        }
      }
      if (count === 0) {
        newArr.push(arr1[i]);
      }
    }
      for (let i = 0; i < arr2.length; i++) {
        let count = 0;
        for (let j = 0; j < arr1.length; j++) {
          if (arr2[i] === arr1[j]) {
            count++;
          }
        }
        if (count === 0) {
          newArr.push(arr2[i]);
        }
      }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object. */

function destroyer(arr) {
  let newArr = [];
  let arg = arguments;

  for (let i = 0; i < arg[0].length; i++) {
    let count = 0;
    for (let j in arg) {
      if (j !== 0) {
        if (arg[0][i] === arg[j]) {
          count++;
        }
      }
    }
    if (count === 0) {
      newArr.push(arg[0][i]);
    }
  }
  return newArr;
}

let resDestroyer = destroyer([3, 5, 1, 2, 2], 2, 3, 5);
let resDestroyer2 = destroyer([2, 3, 2, 3], 2, 3);
console.log(resDestroyer, resDestroyer2);

/* Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function. */

function factorialize(num) {
  let count = 1;
  for (let i = 1; i <= num; i++) {
    count *= i;
  }
  return count;
}

console.log(factorialize(5));

/* Return the length of the longest word in the provided sentence. Your response should be a number. */

function findLongestWordLength(str) {
  let count = 0;
  let arr = str.split(" ");
  for(let i = 0; i < arr.length; i++) {
    if (arr[i].length > count) {
      count = arr[i].length;
    }
  }
  return count;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

/*  Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]. */

function largestOfFour(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    let count;
    for (let j = 0; j < arr[i].length; j++) {
      if(count === undefined || arr[i][j] > count) {
        count = arr[i][j];
      }
    }
    newArr.push(count);
  }
  console.log(newArr)
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/* Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. 
For the purpose of this challenge, do not use the built-in .repeat() method */

function repeatStringNumTimes(str, num) {
  let newStr = '';
  for(let i = 1; i <= num; i++) {
    newStr += str;
  }
  return newStr;
}

console.log(repeatStringNumTimes("abc", 3));

/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. */

function truncateString(str, num) {
  
  if(str.length > num) {
    return str.substring(0, num) + "...";
  } else {
    return str.substring(0, num)
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

/* Check if a value is classified as a boolean primitive. Return true or false. Boolean primitives are true and false. */

function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  }
  return false;
}

console.log(booWho(null));

/* Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean. */

function bouncer(arr) {
  return arr.filter((item) => {
    if(!!item) {
      return item
    } 
  })
}

bouncer([7, "ate", "", false, 9]);