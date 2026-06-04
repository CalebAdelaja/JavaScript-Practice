//Functions are piece of code that you can used over again in your code
//Methods are built-in Functions 
function logger() {
    console.log ("javascript")
}
//calling or running functions
logger();
//funtonality of function, You pass data into a fuction, and function can also return data
/* function greets(){
    console.log("Hello Caleb")
}
greets() */
//paramerters and arguement
//parameters is the variables, that you pass to the function (rice, spaghetti) rice and spaghetti are paramete
//The value that is defined outside the function / Or when you want to call the function is called Arguement 

/* 
RETURN send a value from inside a function back to where the function was called. Note: the function stop executing 
RETURN Always do 2 thing 
    First takes a value inside a function, 
    SECOND send it back to the caller where the functionn is been called
*/
/* function greet (name) {
    return name;
}
let greetings = greet("Welcome back caleb");
console.log(greetings); */

function orderFood(rice, spaghetti){//rice and spaghetti are parameters and right now they are undefined so they will be defind when the fucntions is called and they will respresent the input data of the fuctions 
    console.log(`give me ${rice} plate of rice and ${spaghetti} plate of spagehtti`);
    return rice + spaghetti
}
//now we have call the function so therefore rice as a value of 1 and apple has a value of 2. So 1 and 2 are the arguement, because they're the actual value you passed in when calling the function 
let totalOrder = orderFood(1, 2)
console.log(totalOrder)
//
function myAge(currentAge){// let's just say currentAge is an empty variable now 

    return currentAge; //and we want to return the currentAge
}
let newAge = myAge(26 + 4);// here we already call the function becuase to make a function work we have to call it myAge(26); then the function already worked after it worked, then it return the output to currentAge, and also newAge is now equal to 30
console.log(newAge)

//function expression
const calAge2 = function (birthYear) {
    return 2026 - birthYear;
}
const myNewAge = calAge2(2005)
console.log(myNewAge, newAge,)


function fruitProcessor(apples, oranges){
    console.log (apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
let appleJuice = fruitProcessor(5, 3)
console.log(appleJuice)


function add(a,b){
   const addition = a + b; 
   return addition; //send out the the answer for a + b
}
let results = add(2,3); //run the function here and store it in result
console.log(results);

function adds(a, b) {
  return a+b;   // "sends out" the answer
}

let result = adds(2, 3);  // "catches" the answer and stores it in result
console.log(result);     // shows what was caught: 5

/* function greet() {
    let Welcome =  "Hello Caleb";
  return  Welcome;
}// Javascript go back to the function, 

let message = greet(); //first the function is called already with this greet()
console.log(message); */


/* ARROW FUNCTION */
const Welcome = (language) => {
    let UserName = prompt("Enter your name");
    if(UserName){
        return `Welcome to ${language} ${UserName}`;
    }
};

let resultGreet = Welcome("Javascript");
alert(resultGreet );
console.log(resultGreet);