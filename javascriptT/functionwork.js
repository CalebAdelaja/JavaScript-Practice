const checkEmail = (checked) => {
    if(userEmail){
        if(!userEmail.includes("@gmail.com")){
            alert("Your email did not include @gmail.com")
            return false
        }
        alert("your email is valid");
    }
}

let userEmail = prompt("Enter your email");
checkEmail(userEmail);
console.log(userEmail);