//First Game rock, paper, scissor
let playGame = confirm("Did want to play rock paper scissors game👍"); //asking the user if they wanna play a game
if (playGame) { //Make a if conditional satement, If the user click OK
    let playerChoice = prompt("Please enter rock, paper, scissors"); // So we say if the palyer click OK, we assign a variable, to make the user pick rock, paper, scissors.
    if (playerChoice) { // If the user pick rock paper or scissors 
        let playerOne = playerChoice.trim().toLowerCase()//we need a varible that will handle the user input(what the playe choose)
         if (playerOne==="rock" || playerOne==="paper" || playerOne==="scissors"){ // Now we say if user picked rock, paper of scissors any of the 3 
            let computerChoice = Math.floor(Math.random() *3 + 1)//remember this give number from 1 to 3. Now its computer's time to pick so to make computer pick we set a random number from 1 to 3 becuase its just 3 choice 
            let computer = computerChoice === 1 ? "rock"
            :computerChoice === 2 ? "paper"
            :"scissors" //Remeber in javascript you will always need a varible to handle the next action here now we're saying from the random number setted we assigned a varible to say if computer pick 1 is rock, if computer pick 2 is paper then 3 is scissors 
            /* Now this the normal game player versus computer */
            let result = playerOne === computer ?"tie game" /* `computer: ${computer}\nplayer: ${playerOne}\ntie game` */
            : playerOne === "rock" && computer === "paper"
            ? `computer: ${computer}\n player: ${playerOne}\ncomputer wins`
            : playerOne === "paper" && computer === "scissors"
            ? `computer: ${computer}\n player: ${playerOne}\ncomputer wins`
            : playerOne === "scissors" && computer === "rock"
            ? `computer: ${computer}\n player: ${playerOne}\ncomputer wins`
            :`computer: ${computer}\nplayer: ${playerOne}\nplayerOne wins`
            alert(result); 
            console.log(result)
            let playAgain = confirm("You wanna play again?")
            playAgain ? location.reload() : alert("Thanks for playing, bye for now👋")
         } else{
            alert("you didn't pick anything")// if the player didn't pick anything the alert box says "you didn't pick anything"
         }
    } else {
        alert("Guess you change your mind, maybe next time") // If the user didn't pick anything or click CANCEL the alert box will say "Guess you change your mind, maybe next time"
    }
} else{
    alert("Nice meet you, maybe later👋") // if they click CANCEL in the pop-up box the alert box will say "Nice meet you, maybe later👋"
}

/* I think i learnt something about javascript: "today that you will always need a varible to handle the next action" Why i sai this is that   we have a varible play game */
