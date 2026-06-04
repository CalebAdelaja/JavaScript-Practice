console.clear ()
// write javascript code that will return a random letter from your name 
//Problem solving:

const myName =  "manchesterCity"; //Set a variable name 
console.log(typeof myName)//string(To check the type of vcariable it is)
console.log(myName.charAt(4))//4 falls under h if we count from 0
console.log(myName.length)//the total strings is 14 we have 14 letters

console.log(Math.floor(Math.random() * 14));// we are going to be using these one because we alredy use the length property to get the total amount of letters we have in the string(myName) but you can acctually put the exact number of letters of the string whuch is 14 you can put 14 still the same thing 
console.log(Math.floor(Math.random() * 4));
console.log(Math.floor(Math.random() * 4) + 1);
console.log(Math.floor(Math.random() * 4) + 1);


//In solution
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));

const randomIndex = Math.floor(Math.random()*myName.length);
const randomLetters = myName[randomIndex];
console.log(randomLetters);

const myResult = myName[Math.floor(Math.random()*myName.length)]

// i can acctually make it not random like make it write the name from 
console.log(myName.slice(0, 14));

const fisayoIs = {
    looks: "stunning",
    personallity: "amazing",
    effectOnMe: "butterflies"
};

console.log(fisayoIs.looks)
console.log(fisayoIs.personallity)
console.log(fisayoIs.effectOnMe)
const feelings ="i think am developing a crush ☺️";
if(
    fisayoIs.looks === "stunning" && fisayoIs.personallity === "amazing"
    
); {
    console.log("i think am developing a crush☺️");
    console.log(feelings)
}


/* 
Mark and john are trying to compare thier BMI(Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height).
(mass is in kg and height in meter).

1. store mark's and john's mass and height in variables
2. calculate both their BMIs using the formula (you can implement both version)
3. create a boolean variable 'markHigherBMI'containing information about whether mark has a higher BMI than john.

TEST DATA 1: Mark weight 78 kg and his 1.69m m tall, john weight 92 kg and his 1.95 m tall
TEST DATA 2: Mark weight 95 kg and his 1.88 m tall, john weight 95 kg and his  1.78 m tall
 */

// variable for mark and john weight
const markMass = "78  kg";
const johnMass = "92kg";

// variable for mark and john height 
const markHeight = 1.69;
const johnHeight = 1.95;

// to use: BMI = mass / height ** 2 = mass / (height * height).
const markHeightCal = markHeight * markHeight;
console.log(markHeightCal)

// this is for mark
const markBMI = Number.parseInt(markMass) / markHeight ** 2;
const markBMIF2 = Number.parseInt(markMass) / (markHeight * markHeight);

console.log(markBMI)
console.log(markBMIF2)

if (markBMI === markBMIF2){
    console.log("correct")
} else {
    console.log("wrong")
}

// For John
const johnBMI = Number.parseInt(johnMass) / johnHeight **2;
const johnBMIF2 = Number.parseInt(johnMass ) / (johnHeight * johnHeight);

console.log(johnBMI)
console.log(johnBMIF2)

// solution3: compare mark and john BMI this is using boolean
let markHigherBMI;
/* console.log(markHigherBMI) */

//using conditional statement 
if (markBMI > johnBMI) {
    markHigherBMI = Number.parseFloat(1)
} else {
    markHigherBMI = Number.parseInt(0)
}
console.log(markHigherBMI.toString())

/* Writre a javascript code will return a random names to the console */
//random - Use the math.random 
//Slice- To choose fronm the number of the words fall into 
// make like 3 varibles 


const Name1 = "Caleb"
const Name2 = "Victor"
const Name3 = "Pelumi"
const Name4 = "OBA"

const randomNames = Math.floor(Math.random()*4)// this give number from 0 to 3
console.log (randomNames)

if (randomNames === 0) {
   console.log(Name1)
} else if(randomNames === 1) {
    console.log(Name2)
} else if( randomNames === 2) {
    console.log(Name3)
} else {
    console.log(Name4)
}
