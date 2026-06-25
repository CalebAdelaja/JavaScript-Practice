console.log(sessionStorage);
console.log(localStorage);

sessionStorage.setItem("name", "caleb");//First set/save the data.So the "name" is the keyName and the "caleb" is the value is just like the keyName = value 
const user = sessionStorage.getItem("name"); // we get the data that we have saved. but here we are going to get the data using the keyName, so we assing it a vraible so now thw variable hold the data we have already get from the keyName
console.log(user);// output is going to be "caleb"

localStorage.setItem("city", "oshogbo");//First set/save the data.So the "name" is the keyName and the "caleb" is the value is just like the keyName = value 
const place = localStorage.getItem("city");// we get the data that we have saved. but here we are going to get the data using the keyName, so we assing it a vraible so now thw variable hold the data we have already get from the keyName
console.log(place);//output is going to be "oshogbo"

// console.log(localStorage.removeItem('city'))
// console.log(sessionStorage.removeItem('name'))

const userInput = document.getElementById("userInput");
const userName = document.getElementById("userName");
userName.textContent = localStorage.getItem('userName');// why i put here is that incase if the page reload and you know javascript will always run line by line from head to buttom. So the reason is that javascript get the stored data in the localStorage and display it. and move to the next line 
userInput.addEventListener('keyup', () =>{
    localStorage.setItem('userName', userInput.value)
    userName.textContent = localStorage.getItem('userName');
})


