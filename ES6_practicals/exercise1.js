'use strict';

/*
1. Write a function that capitalizes the first letter of each string argument it receives.  
	Function arguments: ['hello', 'there', 'ES', 6]
	Output: ['Hello', 'There', 'ES'] 
*/
console.log('*** TASK 1 ***');

let array = ['hello', 'there', 'ES', 6];
let arr2 = [];

array.forEach(element => {
    if (typeof element === 'string') {
        arr2.push(element.charAt(0).toUpperCase() + element.slice(1, element.length));
    }
}); 

console.log(arr2);

/* let firstLetterCap = (arr) => {
    let arr2 = [];
    let constructStr = '';
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            constructStr = arr[i][0].toUpperCase();
            for (let j = 1; j < arr[i].length; j++) {
                constructStr += arr[i][j];
            }
            arr2.push(constructStr);
        }
    }
    return arr2;
}

console.log(firstLetterCap(array)); */

console.log('\n');

/* 
2. Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
	Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
	Output2: [ 24, 20 ] // tax only
*/

console.log('*** TASK 2 ***');

const products = [{ name: "Banana", price: 120}, { name: "Orange", price: 100}]
const taxRate = 20;

const productsWithTax = (prod, taxR) => {

    let fullProdPrice = prod.map(product => {
 
        const {name, price} = product;
    
        let productsPriceWithTax = {
            name: name,
            price: price + (price * taxR / 100)
        }
        return productsPriceWithTax;
    })
    return fullProdPrice
}

const taxProducts = (prod, taxR) => {
    
    const onlyTax = prod.map(product => {
    
        const {price} = product;
    
        let tax = price * taxR / 100;
    
        return tax;
    })
    return onlyTax;
} 

console.log(productsWithTax(products, taxRate));
console.log(taxProducts(products, taxRate));
console.log('\n');

/*
3. Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
	Input: [4, 6, 11, -9, 2.1], 2
	Output: [6, 8, 13, -7, 4.1]
*/

console.log('*** TASK 3 ***');

const arrNum = [4, 6, 11, -9, 2.1];
const value = 2;

const newArray = (arr, val) => {
    if (!val) {
        let arrNew = arr.map(element => {
            return element + 1;
        })
        return arrNew;
    } else {
        let arrNew = arr.map(element => {
            return element + val;
        })
        return arrNew;
    }    
}

console.log(newArray(arrNum, value));
console.log(newArray(arrNum));
console.log('\n');

/* 
4. Write a function that filters all even elements of the array.
	Input: [6, 11, 9, 0, 3]
	Output: [6, 0]
*/
console.log('*** TASK 4 ***');

const numbers = [6, 11, 9, 0, 3];

const filterEvenNum = arr => arr.filter(num => {
    let evenNum = [];
    if (num % 2 === 0) {
        evenNum.push(num);
        return evenNum;
    }
})

console.log(filterEvenNum(numbers));
console.log('\n');

/* 
5. Write a function that filters all the strings from the given array that contain substring JS or js.
	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
	Output: ['babel.js, 'JS standard']
*/
console.log('*** TASK 5 ***');

const arr = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'];
let arrJs = [];

let filterJS = array => array.filter(word => {
    for (let i = 0; i < word.length; i++) {
        if ((word[i] === 'J' || word[i] === 'j') && (word[i + 1] === 'S' || word[i + 1] === 's')) {
            arrJs.push(word);
            return arrJs;
        }     
    }
})

console.log(filterJS(arr));
console.log('\n');

/* 
6. Write a function that filters all integer numbers from the given array. 
    Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
	Output: [7, 8]
*/

console.log('*** TASK 6 ***');

let num = [1.6, 11.34, 9.23, 7, 3.11, 8];
let wholeNum = [];

let filterNum = arr => arr.filter(el => {
    if (el - Math.round(el) === 0) {
        wholeNum.push(el);   
        return wholeNum;
    }
    
})

console.log(filterNum(num));
console.log('\n');

/* 
7. Write a function that filters all integer arguments that contain digit 5.
	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
	Output: [45, 553]
*/

console.log('*** TASK 7 ***');

let result = [];

let numContainNumber5 = (...args) => args.filter(el => {
    if (el - Math.round(el) === 0) {
        let num = el.toString();
        for (let i = 0; i < num.length; i++) {
            if (num[i] === '5') {
                result.push(el);
                return result;
            } 
        }   
    }
})

const func = numContainNumber5(23, 11.5, 9, 'abc', 45, 28, 553);
console.log(func);
console.log('\n');
/*
8. Write a function that returns indexes of the elements greater than 10. 
	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
	Output: 1, 2, 5
*/

console.log('*** TASK 8 ***');

let indexes = '';

let numGreaterThan10 = arr => arr.forEach(num => {
    if (num > 10) {
        indexes += `${arr.indexOf(num)} `;
    }
})

numGreaterThan10([1.6, 11.34, 29.23, 7, 3.11, 18]);
console.log(indexes);
console.log('\n');

/* 
9. 
a) Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals. 
b) Write a function that prints out the names of persons older than 25. 
c) Write a function that check if there is a person older than 40.
d) Write a function that checks if all persons are older than 20.   
*/
console.log('*** TASK 9 ***');

let persons = [{name: 'Nikola', age: 30}, {name: 'John', age: 15}, {name: 'Alex', age: 34}];

let personNameOlderThan25 = arr => {
    let older25 = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > 25) {
            older25 += `${arr[i].name} `
        }
    }
    return older25;
}

let checkIfOlderThan40 = arr => {
    let result;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > 40) {
            result = 'Yes'
            break;
        } else {
            result = 'No'
        }
    }
    return result;
}

let checkAllOlderThan20 = arr => {
    let res;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age < 20) {
            res = `All persons aren't older than 20, some of persons are younger.`
            break;
        } else {
            res = `Yes, all persons are older than 20.`
        }
    }
    return res;
}

console.log(personNameOlderThan25(persons));
console.log(checkIfOlderThan40(persons));
console.log(checkAllOlderThan20(persons));

/*
10. Write a function that checks if the given array is an array of positive integer values. 

	Input: [3, 11, 9, 5, 6]
	Output: yes

	Input: [3, -12, 4, 11]
	Output: no
*/
console.log('*** TASK 10 ***');

let positiveOrNegative = arr => {
    let result;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result = 'No';
            break;
        } else {
            result = 'Yes';
        }
    } 
    return result; 
}

console.log(positiveOrNegative([3, -12, 4, 11]));
console.log(positiveOrNegative([3, 11, 9, 5, 6]));
console.log('\n');

/*
11. Write a function that calculates the product of the elements of the array. 
    Input: [2, 8, 3]
    Output:  48
*/
console.log('*** TASK 11 ***');

let product = arr => {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
}

console.log(product([2, 8, 3]));
console.log('\n');

/*
12. Write a function that calculates the maximum of the given array. 
    Input: [2, 7, 3, 8, 5.4] 
	Output: 8
*/
console.log('*** TASK 12  ***');

let maxNum = arr => Math.max(...arr);
console.log(maxNum([2, 7, 3, 8, 5.4]));