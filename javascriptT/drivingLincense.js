const acceptedAge = 18;
const currentYear = 2026;

const eligible = [];
console.log(eligible);
const wait = [];
console.log(wait);
const notEligible = [];
console.log(notEligible);
let userName = prompt("Let's Know your name");
let userYear = prompt("Enter your Birth Year");
if (userYear){
    let ageCheck = currentYear - userYear;
    console.log(ageCheck);
    if (ageCheck >= acceptedAge){
        alert(`${userName}  You're eligible to collect Driving License`)
        eligible.push(userName);
    }else if (ageCheck === 17 || ageCheck === 16){
        alert(`${userName} Wait for 2 to 1 years`)
        wait.push(userName);
    }else{
        alert(` ${userName}You're not eligible to collect Driving license`)
        notEligible.push(userName);
    }
    /* let checkAgain = confirm("You check again?")
    checkAgain ? location.reload() : alert("Thanks, bye for now👋") */
}else{
    confirm("You haven't enter your Birth Year");
}

/* We want to colloct those are  */

