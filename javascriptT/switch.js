//switch statements is another tool for making descision in javascript. Switch checks one value, then compare with many possible cases, and runs the matching one.

/* 
SYNTAX

switch (key) {
    case value: // you know this also means that if(key===value) 
        
        break;

    default:// the default is like an else statement
        break;
} Now what is generally saying is that use the key to compare all cases which is samething as if(key===value)

*/


/* In this example below we have 3 variables the switch has the value of one of the 3 variable as the value of the switch, that's what we are comparing with case then when it's sees the one that matches with the case and the switch value, then it run that case code*/

name0 = "caleb"
name1 ="chris"
name2 ="tobi"

switch (name1) {
    case name0:
        console.log("caleb");
        break;
    case name2:
        console.log("tobi");
        break;
    case "chris":// This also means if(name1==="chris")
        console.log(`${name1} is doing so fine `);
        break;// telling javascript to stop, if the break is no  there javascript runs all the stop under the case 

    default: // This also means else{run this code}
        console.log("noun");
}

/* Now we have name1 as the the value of the switch (name1 = "chris") and the first case doesn't match the switch value, the second case doesn't match the switch value, the third case does match because the switch value is name1(name1 = "chris") the third case has a string "chris" which matches the switch value and "chris" is the value of name1 variable [don't get confused]*/

/* console.log(Math.floor(Math.random() * 5 + 1)) This give number from 1 to 5
console.log(Math.floor(Math.random() * 6)) This give number from 0 to 5
console.log(Math.floor(Math.random() * 6+1)) This give number from 1 to 6  */

switch (Math.floor(Math.random() * 5 + 1)) {
    case 0:
        console.log(0)
        break;
    case 1: 
        console.log(1)
        break;
    case 2:
        console.log(2)
        break;
    case 3:
        console.log(3)
        break;
    case 4:
        console.log(4)
        break;
    case 5:
        console.log(5)
        break;
    default:
        console.log("no match")
}

/* Here we set a random numder from 0 to 5 and round it down so to give a number whole number so it rondomly give a number and also compare that random number to each case any case that match is showed in the console*/

//For Rock Paper Scissors
let player = "scissors";
let computer = "paper";
console.log(player===computer)
switch (player) {
    case computer:
        console.log("tie game")
        break;
    case "paper":
        if (computer === "rock") { 
            console.log("computer wins")
        } else {
            console.log("player wins")
        }
        break;
    case "scissors":
        if (computer === "paper") {
            console.log("computer wins")
        } else {
            console.log("player wins")
        }
        break;

    default:
        if (computer === "scissors") {
            console.log("computer wins")
        } else {
            console.log("player wins")
        }
        
}

/* In the rock paper scissor game: First we have two variable the player and computer, our switch has the value of player and player can have the value of "rock", "paper", "scissors" 
Now to make this work we first set the tie game, that is if the computer and player pick same thing e.g maybe the computer picked "rock" and the player also picked "rock" you know the game is on a tie nobody wins: for that we have to set the player variable value to "rock and the computer value to "rock" so they get same value. 
Now we said earlier that our switch value is player which is now the value of "rock". 
The first case has the value of computer now its says compare the switch value to the first case value if they match then run the following code, then what we did above, we say it should run console.log("tie game") if its match, truely it print "tie game" to the console broswer because normally player and computer are variable and also same value which is "rock". If we use normal compare that will give a boolean data like this console.log(player===computer) the putput will be true because they both have same value "rock" */