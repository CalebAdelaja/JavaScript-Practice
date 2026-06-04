/* Array is an ordered collection of data, in JavaScript we can collect different types of data types(string, number, boolean) that coollection of data types is called an ARRAY */

const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
/* console.log(months); */
/* console.log(months[0] = "janvier") */
let turnSring = months.toString();

const myClub = ["Man", "chester", " " , "City"];
/* ARRAYS METHODS */
/* .PUSH is an array methos that pushes items to last collection of an array  */
let addItem1 = months.push("janvier");
console.log(addItem1);

/* .POP is an array methos that remove items in an array .pop is going to remove the last item inside an array */
addItem2 = months.pop();
console.log(addItem2);// This will output the item that is removed from the array 

/* .UNSHIFT is an array method that add item to the first position of an array*/
addItem3 = months.unshift("décembre");
console.log(addItem3);

/* .SHIFT is goint to remove an item from the first position of an array*/
addItem4 = months.shift();
console.log(addItem4);

/* .length count all the item inside the array starting form 1  */
console.log(months.length);

//Let's say you want to access the last items in an array may they are many items inside the arrary you can't start count from zero you can just so this :
console.log(months[months.length - 1]);//Explanation: You know the length method return the size if the array, like the total items in an array so you just minus by 1 now month.length is 12 right so it will be 12 -1 = 11 then you wrapper all of that inside a [] square bracket(you that's what is used to access an item in the array) is it now be [11] the it output the items that fall in that index(11) which is "December"


/* Accessing ARRAY Item: 
We can accsess Array item by using INDEX and index start from 0 that is months[0] = "January"  months[1] = "Febuary" to accsess any item in the array you input the index inside the [] square bracket*/
console.log(months[5]);

console.log(months.indexOf("June"));
console.log(months.lastIndexOf("June"));
console.log(months.includes(addItem4));
console.log(months.includes(addItem2));
console.log(turnSring);//The toString() method returns the elements of an array as a comma separated string.
console.log(months.at(4));//The .at() methos is like the the [] to access item they're same thing 
console.log(myClub.join(""));//The .join() method joins all the array items into a string. like .tostring() but in the .join() you can specify the seperator in-between

/* SLICE METHOD */
// The slice method is going to give a new array, inside the slice methode the first parameter is where you're cutting from (that is the staring point) and the second parameter is where to stop, the position to stop but it will not inclide whatever items that is in that position 
console.log(months.slice(0, 6 + 1)); 
const alphabetArray = ["A", "B" ,"C", "D", "E", "F", "G"];
const alphabetNewArray = alphabetArray.slice(2, 5);
console.log(alphabetNewArray);

/* Changing Elements */
console.log(months[0] = "janvier");//This will replace "January" with "janvier" so it means remove "january" and put "janvier" in the [0] that's at the first of the array items

console.log(months[months.length] = "décembre")//This is just another way to add items to array like the method .push that add items in an array to the last position 

/* Merging Arrays (Concatenating) You can merge two different arrays together using .concat() method */
const myBoys = ["caleb", "christpher", "cornelius"]
const myGirls = ["christiana", "cecilia"]
const myCousins = ["peter", "paul"]
const myChildrens = myGirls.concat(myBoys);
const myFamily = myGirls.concat(myBoys, myCousins);//merging three arrays togther 
console.log(myFamily);
console.log(myChildrens);
console.log(myChildrens.concat("Anabel", "Daniel"))//You also use it to concat vlaue like add value but it will also be in the last position

/* console.log(months[5] === "June"); */

/* SPLICE: Splice is used to cut, the splice method take in 2 value the first is the intial position where we are cutting from, the second value represent how many item did you want to cut */
console.log(months.splice(5, 5));//The First five value is the inital value that is cut from the position 5 in the array item, thn the second 5 valur is telling the amount of items should cut


console.log(months.length);
console.log(months);

/* FIND .find() is going to return the first matching condintion(Items)  And also the FIND methos alwaya loops through an array */
//find method alwaya take in a callback function what is call-back function? Call-back function are function that are pass as an argumant to a method or another function
//create a even number using for loop that will push the numbers to the empty array 
const evenNumber = [];
for (let i = 2; i <=10; i += 2 ){
    evenNumber.push(i);
}
console.log(evenNumber);

const greateTo = evenNumber.find( (n) => n > 2 ); // So here we put the call-back function inside the .find() method (we use arrow function for the call-back function), The function in the find method is to be able to have access to the current value when the find method is looping throght the array: that is when it loops it get the current value now n is 1 and also checks if its match the condition n > 2 if no, it loop again and n is 2 and also check if the current value matches the condition n > 2 if no it continue and loop again now n is 3 and also check if its matches the condition n > 2 so yes 3 > 3 now the consition is satisfied and 3 is the first matching items or condition.
console.log(greateTo);
const lesserThan = evenNumber.findIndex( (n) => n > 6 );
console.log(lesserThan);

/* TRANSFORMING AN ARRAY  
Transforming an array is about using array method to, but those method are going to return another array
Transforming array methods we have 
MAPING Mthod: Let's say we want to increment each all the number items inside an array by 2 you use map method */

const mapArray = evenNumber.map((increment) => increment += 2);// This is by incrmenting by 2
console.log(mapArray);
const mapArrayx2 = evenNumber.map((num) => num *2); // This is by multiplying by 2
console.log(mapArrayx2);

/* we have FILTER Method which list out all the items that matches the condition, it's work like find but find return just one items that matches the condition that is the first matching item of the condition, but filter list out all the matches item */

const filteredArray = evenNumber.filter((num) => num > 4);
console.log(filteredArray);

/* We have REDUCE Method: The Reduce is used to accaumulate an array to just one value (just like summing all the items in array) also the Reduce methos takes in a call back function but the call back function will have two parameters unlike othe function which has only one parameter, The first paramter is called the accumulator, while the second parameters is called cuurent (which serve as the current value for each of the items in tha array when looping through an array) */

const sumArray = evenNumber.reduce((acc, curr) => acc + curr, 0);//The 0 here serve as the initial accumulator that is currently we haven't accumulate anything, so if the current value(curr) is 1(that if the reduce method is looping into the array) then it will be 0 + 1 = 1 now the accumulator become 1 acc = 1, then it will loop again then so the current value will now be 2 that's curr = 2 it wll now be the current value of the accumulator(acc) plus the current value(curr) that's 1 + 2 = 3 so it continues till the end of the array.
console .log(sumArray);

const summArray = evenNumber.reduce((acc, curr) => acc + curr, 1);
console .log(summArray);

/* Write a code that will will list all items that are in the two array let's say we have arryaA and arrayB we want to write a code that will list out the itemm that exist in arrayA and arrayB using filter method */
const arrayA = mapArray;
const arrayB = mapArrayx2;
console.log (arrayA);
console.log(arrayB);

const listOut = arrayA.filter((sameItems) => arrayB.includes(sameItems));
console.log(listOut);

const sumlistOut = listOut.reduce((acc, curr) => acc + curr, 0);
console.log(sumlistOut);

/* LOOPING THROUGH AN ARRAY */
const products = ["phone", "laptop", "television", "watch"];
/* Using normal for loop */
for(let i = 0; i < products.length; i++){
    console.log(products[i])
}

/* BY using the for of loop */
for(let accessries of products){
    console.log(accessries);
};

/* Using the forEach Method */
products.forEach((accessries) => console.log(products));
