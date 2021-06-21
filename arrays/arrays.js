var mixArray = [3, true, 6, "neki string", 80, null];
var numbers = [3, 6, 80];

console.log(mixArray[3]);

var string = mixArray[3];
console.log(string);

console.log(mixArray);

//

var multiDimArr = [[1, 4, 6], "string", [3, true, null], 44, 99];

var b = multiDimArr[2][1];
console.log(b);

console.log(multiDimArr.length);
console.log(multiDimArr[0].length);

var arrLength = multiDimArr.length;
console.log(arrLength);

//

var c = [3, 55, 78];

c[1] = "something";
c[3] = "something else";
c[10] = 100;

console.log(c);

console.log(c[5]);

//

var d = "something else";
var bla = d[1] + d[5] + d[8];

console.log(bla);
