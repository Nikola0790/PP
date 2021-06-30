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