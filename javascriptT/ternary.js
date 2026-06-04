//conditionals Ternary oprator is also use to make decision in javascript 

//SYNTAX
//condition ? ifTrue : ifFalse; 
// This is also like an if else statement, unlike if else statemnet, here you start with a condition after the conditional statement follow by a question mark(?) if the condition is true the operator is showed, and also followed by a column(:) the column(:) (is like else in the if else statement) then if the condition is false the result of the operation is showed

let calebLoves = "coding";
console.log(`i love ${calebLoves}`)

let whatILike = calebLoves !== "coding" ? "eating" : "coding";
console.log(whatILike);

let calebHates = "hate girls";

let myHobbies = calebHates === whatILike ? `yes i ${calebHates} ` : `i love ${calebLoves}`;
console.log(myHobbies); 

let testScore = 75;
let myGrade = 
    testScore < 85 ? "A" 
    : testScore === 75 ? "B"
    : testScore < 65 ? "C"
    : testScore < 59 ? "D"
    : "F";
console.log(`Your test garde score is ${myGrade}`)

//In Rock, Paper, Scissors game 

let player = "rock"
let computer = "paper"

const playerLoose = "computer wins"
const computerLoose = "player wins"

let result = 
player === computer ? "Tie game"
    :player === "rock" && computer === "paper" ? playerLoose
    :player ==="paper" && computer === "rock" ? computerLoose 
    :player ==="paper" && computer === "scissors" ? playerLoose
    :player === "scissors" && computer === "paper"? computerLoose
    :player === "scissors" && computer === "rock" ? playerLoose
    :computerLoose
console.log(result);

 