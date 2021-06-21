/* BULIT IN */

// push - add element in array in next free position

var someArray = [12, 33, 44];

someArray.push(22, 33, 44);
var newA = someArray;
console.log(someArray);

//pop - delete last element in array

someArray = [12, 33, 44];

var deletedElement = someArray.pop();
deletedElement = someArray.pop(); 

console.log(deletedElement);

// unshift - add element in first position in array

var someArray = [12, 33, 44];

var somtehing = someArray.unshift(50);

console.log(someArray);
console.log(somtehing); // array length

// shift - deleted firsrt elemenet in array

var someArray = [12, 33, 44];
var deletedEl = someArray.shift()

console.log(someArray);

// indexOf - find index of elemenet, if element is in array.

var someArray = [12, 33, 44, 33];

var index = someArray.indexOf(33)

console.log(index);

// includes - true or false, use for check.

var someArray = [12, 33, 44, 33];

var index = someArray.includes(133)
var index = someArray.includes(33)

console.log(index);

// slice - slice between elements in brackets, can use for copy array, real copy.

var someArray = [12, 33, 44, 33, 555, 17, 9];
var chopped = someArray.slice(2, 6);

console.log(chopped);

// toString - array to string

var someArray = [12, 33, 44, 33, 555, 17, 9];
var string = someArray.toString();
console.log(string);

// join - array to string, better then toString. Change any separator, to string use only ','

var someArray = [12, 33, 44, 33, 555, 17, 9];
var string = someArray.join('-');
console.log(string);


// from string to array *********************************************

// split

var someString = 'something,other,bla,bla';
var arr = someString.split('o') // change spliter
console.log(arr);

// map

var someArray = [12, 33, 44, 33, 555, 17, 9];
var mappedArray = someArray.slice(2,4).map(function(number) {
    return number + 10;
})
console.log(mappedArray);