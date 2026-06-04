/* The if statement means if a condition is true the do something 
    if (condition){
    then do something or run this code if the condition is true
} */

const name = "caleb";
const mE = "caleb";
let feelings;
if (mE === name) {
    feelings = `i think am developing a crush 
    ${name}`;
}

console.log('i love you');
console.log(feelings);


let soup
let reply;
let fedback = "sorry we are out of soup ";

if (soup) {
    reply = `here's your ${soup}`
} else{
   console.log(fedback);
}

const age = 15;

if(age <=18 ){
    console.log("you're an adult") 
}else{
    console.log("you're still young")
}

let avarge = 40;
if(avarge < 50){
    console.log("you pass")
}else{
    console.log("you're avarage")
}

/* The else statement means if a condition is not true then do this instead 
    else (condition){
    then do something or run this code if the condition is true
} */


const yearsOld = 20;
const isoldEnough = yearsOld >= 18;
console.log(isoldEnough === yearsOld)
if(yearsOld >= 18){
    console.log("you can collect driving license🚗")
} 

if(isoldEnough) {
     console.log("how many years left for you")   
}

let score = 90;
let grade;
if(score >= 90){
    grade = "A"
} else if(score <= 89){
    grade="B"
}
console.log(grade)

//nested statement: In the nested statement if the first (if) is not true then the nested if inside the first if will not run unless its has an else outside hence the else statemenrt runs its code 

let myAge = 20;
let myReply;
let myStatus;
if(myAge < 18){
    console.log("Adult")
    
    if(myAge == 30){
        console.log("Youth")
    }else if(age > 18){
       myReply ="am not young"
    }
}else {
    if (myAge<25){
        myStatus = "you can marry💍"
    }else{
        myStatus = "i can't marry"
    }
}

console.log(myAge);
console.log(myReply);
console.log(myStatus)

    //RPS Rock, Paper, scissors game template

    //my version 
if (playerOne === computer){
    //tie game: no one wins
 }else if (playerOne ==="rock"){
        if(computer === "paper"){
            //computer wins
        }else {
            //playerOne wins
        }
    } else if (playerOne === "scissors"){
        if(computer ==="rock"){
            //computer wins
        }else{
            //playerOne wins
        }
    }else if(playerOne === "paper"){ /* else{
        if(computer === "scissors")} not adding else if also means samething that is if playerOne is not tie or not rock, not scissor the else took it like we already say else if (playerOne === "paper")  */
        if(computer ==="scissors"){
            //computer wins
        }else {
            //playerOne wins
        }
}

    //Dave gray version 
 if (playerOne === computer){
    //tie game: no one wins
 }else if (playerOne ==="rock"){
        if(computer === "paper"){
            //computer wins
        }else {
            //playerOne wins
        }
    } else if (playerOne === "paper"){
        if(computer ==="scissors"){
            //computer wins
        }else{
            //playerOne wins
        }
    }else {
        if(computer === "rock"){
            // computer win
        } else {
            //playerOne wins
        }
    }