console.log(sessionStorage);
console.log(localStorage);

sessionStorage.setItem("name", "caleb");//First set/save the data.So the "name" is the keyName and the "caleb" is the value is just like the keyName = value 
const user = sessionStorage.getItem("name"); // we get the data that we have saved. but here we are going to get the data using the keyName, so we assing it a vraible so now thw variable hold the data we have already get from the keyName
console.log(user);// output is going to be "caleb"

localStorage.setItem("city", 10);//First set/save the data.So the "name" is the keyName and the "caleb" is the value is just like the keyName = value 
const place = localStorage.getItem("city");// we get the data that we have saved. but here we are going to get the data using the keyName, so we assing it a vraible so now thw variable hold the data we have already get from the keyName
console.log(place);//output is going to be "10"

// console.log(localStorage.removeItem('city'))
// console.log(sessionStorage.removeItem('name'))

const userInput = document.getElementById("userInput");
const userName = document.getElementById("userName");
userName.textContent = localStorage.getItem('userName');// why i put here is that incase if the page reload and you know javascript will always run line by line from head to buttom. So the reason is that javascript get the stored data in the localStorage and display it. and move to the next line 
userInput.addEventListener('keyup', () => {
    localStorage.setItem('userName', userInput.value)
    userName.textContent = JSON.parse(localStorage.getItem('userName'));
})

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('LastName');
const userEmail = document.getElementById('userEmail');
const userForm = document.getElementById('userForm');
const displayUsersDetails = document.querySelector('.display-usersDetails')
console.log(displayUsersDetails)
// localStorage.clear()

const usersDetailsArray = JSON.parse(localStorage.getItem('userDetails')) || []

function showUserDetails() {
    displayUsersDetails.innerHTML = "";
    usersDetailsArray.forEach((details) => {
        console.log(details)
        const detailsContent = document.createElement("div");
        detailsContent.classList.add('details-Content')
        detailsContent.innerHTML = `
            <p>First-Name: ${details.FirstName}</p>
            <p>Last-Name: ${details.LastName}</p>
            <p>Email Address: <a href="#">${details.Email}</a></p>
         `
        displayUsersDetails.appendChild(detailsContent)
    });
}
showUserDetails()
userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usersArray = {
        FirstName: firstName.value,
        LastName: lastName.value,
        Email: userEmail.value
    }
    usersDetailsArray.push(usersArray)
    console.log(usersArray)
    console.log(usersDetailsArray)
    localStorage.setItem('userDetails', JSON.stringify(usersDetailsArray))

    firstName.value = ""
    lastName.value = ""
    userEmail.value =""
    showUserDetails()  

})
