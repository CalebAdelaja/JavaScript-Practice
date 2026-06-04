/* Maths Properties */

console.log(Math.PI);
const myPi = 3.141592653589793;
/* Mathe Methods*/

//Math.trunc remove all the decimal and return an integer
console.log(Math.trunc(myPi));
console.log(Math.trunc(Math.PI));

//Math.round - rounds up to the nearest interger
console.log(Math.round(Math.PI));
console.log(Math.round(3.5));

//Math.cell the number will always be roundedup no matter the number that's after the decimal
console.log(Math.ceil(4.2))
console.log(Math.ceil(Math.PI))

//Math.floor the number will always be rounded down no matter the number that's after the decimal
console.log(Math.floor(Math.PI));
console.log(Math.floor(4.1));

//The power method Math.pow takes to arguments first one is the base and the second one is the exponential
console.log(Math.pow(2, 3));
console.log(Math.pow(Math.PI, 2))

//the min math method return the smallest number
console.log(Math.min(2, 1, 0.6));

//max math methid return the largest number
console.log(Math.max(0.1, 6/2, 1/5))

//Math.random provide a psuedo random number from 0 to 1
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.floor((Math.random()*10)) + 1)
console.log(Math.floor(Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)
console.log(Math.ceil(Math.random()*10))

console.log(Math.floor(Math.random()*2));//this will give number between 1and 0
let a = 30;
let b = 11;
console.log(a % b);