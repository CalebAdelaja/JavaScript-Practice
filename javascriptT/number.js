//This is an integer whole number
const myNumber = 20;
const tomi = 8027112858; 
console.log(tomi);
const float = 10.375;
const myString =  "42";
/* const name = "caleb" */
console.log(myNumber);
console.log( myNumber === float);//javascript treat float number that has .0 and that has no number present aftrer the decimal  point as an whole number so that's why it's true

console.log(myString);
console.log(myString + 3);
console.log(myNumber === myString);
console.log(Number(myString))//we can change a string data type to a number data by using the number function
/*mySting is number but is been decleared as a string data so to make a real number data type we use the number function
so we can now add and to some mathematical operations*/
console.log(Number(myString)+ 8); 

console.log(Number(myString) === myNumber) /* now we can conpare the it with myNumber which is 42  */
const a = "2";
const b = 2;
console.log(a == b)//loose equality sign
console.log(a === b)//strict equality sign
/* Logical operators */
console.log(a && b);
console.log(b || a);

console.log(Boolean(a) + b)


// Number Methods

//isInteger Methods, the is integer methods determines whether the passed value is an integer or not
console.log(Number.isInteger(myNumber)); //this is true becuase myNumber value is 42 and 42 is an integer
console.log(Number.isInteger(myString));
console.log(Number.isInteger(Number(myString)));


// The Number.parseFloat() method parses an argument and return a floating point number. If a number cannot be parsed from the argument, it return NaN
console.log(Number.parseFloat(myNumber));
console.log(Number.parseFloat(float));
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat("123.123utytyfgyu"))//here javascript remove all the non-numeric characters and parses the numeric characters 
console.log(myString);

//Th e toFixed() method formats a number accordging to how many decimal ponit you provide as the parameter. It return the number in string
console.log(myNumber.toFixed(4));
console.log(float.toFixed(1))

//The Number.parseInt methode parses a string argument and return an integer
console.log(Number.parseInt(myString));
console.log(Number.parseInt(myNumber));
console.log(Number.parseInt(float));
console.log(Number.parseInt("3 we are"))

//The toString() method returns a string representing the number
console.log(myString.toString());
console.log (typeof myString.toString());
console.log (typeof Number.parseFloat(myNumber));
console.log(myNumber.toString());
console.log(typeof myNumber.toString());
console.log(typeof Number.parseInt(float));
console.log(float.toString());
console.log(typeof float.toString());
console.log(typeof float);
console.log(typeof Number.parseInt());


//chaning is by using several method chained together
console.log(Number.parseFloat("20june").toFixed(1).toString());

console.log(Number.isNaN(NaN))
console.log(isNaN(NaN))

console.log("hello".length)