console.log("Hello, world");
console.log(typeof "caleb");
console.log(typeof 42);
console.log(typeof true);
 
//string 
const myVariable = "MAthematics";
const myNum = 42;
const myMail = "caleb@gmail.com"

console.log("123456789".length);//length gives the total words for including spaces
//The length property
console.log(myVariable.length); // this display the amount of letter on the console myVariable is equals to "MAthematics" and MAthematics has 11 letters so we use the variable name to do length
//The length property counter all the letter in the strings  
console.log("Every tech boy does fine".length);
console.log("Caleb is doing fine".length); 


// STRING METHODS

 //characterAt methods(charAt)
 console.log(myVariable.charAt(10));//MAthematics
 console.log(myVariable.charAt(3));//MAthematics
 console.log("Caleb is doing fine"[6]);
 console.log(myMail[3]);//caleb@gmail.com

 //indexOf method
 console.log(myVariable.indexOf("s"));//MAthematics
 console.log("calEb is doing fine".indexOf("b")); 
 console.log(myMail.indexOf("@"))//caleb@gmail.com

 //lastindexOf method
console.log(myVariable.lastIndexOf("s"));//MAthematics
console.log ("caleb is doing fine".lastIndexOf("e"))
// whats is the difference between indexOf and lastIndexOf method

//slice method
console.log(myVariable.slice(1, 4));//MAthematics
console.log(myVariable.slice(0, myMail.indexOf("@")))//MAthematics 
//caleb@gmail.com
console.log(myVariable.slice(0, myMail.charAt(3)))
console.log(myVariable.slice(5))//MAthematics 

//toUpperCase and the toLowerCase method
console.log(myVariable.toUpperCase());// To change from lower case to upper case 
console.log(myVariable.toLowerCase());// To change from upper case to lower case

//trim clear space at the beginning of the string and the end of the string
console.log(myVariable.trim())

//includes method will return a boolean value to the console, it checks if a value contain something
console.log(myVariable.includes("mathematics"));
console.log("m")
console.log(myVariable.includes("MAthematics"));

//split method - The split methode check the middles of letter input and splite it 
console.log(myVariable.split("a")); // here "a" is the input the words or letter within "a" is splited out, here myVarible is  MAthematics then we have ['MAthem', 'tics'] because "a" is the middle of MAthem and tics
console.log("Mathematics".split("a"));
console.log("caleb".split("l"));

console.log("".charCodeAt())
console.log(Number.isNaN("caleb"))

/* Add of string or string concatenaion */
let greet = "Hello";
let name = "Caleb";
// using the + sign to concatenate string
console.log (greet + " " + name);
let nameBeLowerCase = name.toLowerCase();
console.log (
    nameBeLowerCase.includes("caleb")
)