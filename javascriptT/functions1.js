function lastChar (language) {
    let programLanguage = "JavaScript";
    return programLanguage[9];
}
let codeResult = lastChar();
console.log(codeResult);

/* console.log() */

function reverse (text = "java") {
    let reversedString = text.split("").reverse("").join("")
    return reversedString
    
}

let firstReverse = reverse();
console.log(firstReverse);

let secondReverse = reverse(firstReverse);
console.log(secondReverse);

const calculateUserAge = function () {
    const currentYear = 2026
    let userAge = prompt('Enter your Birth year');
    if(userAge){
        let resultAge = currentYear - userAge;
        return resultAge;
    }
}
let ageResult = calculateUserAge();
console.log(ageResult)
alert(`You're ${ageResult} years old`);