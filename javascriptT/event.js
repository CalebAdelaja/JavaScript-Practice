const clickBtn = document.getElementById("btn-click");
clickBtn.addEventListener("click", () => alert("You're special"));

const changeButton = document.querySelector(".changed-btn");
changeButton.textContent = "change background"
Object.assign(document.body.style,{
    backgroundColor: "white",
})
const colors = ["#A78BFA", "#38BDF8", "#FB923C", "#34D399", "#F472B6", "#FACC15", "#4F46E5", "#F87171", "#22D3EE", "#1E293B"];

changeButton.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }
    /* document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; */

});

const inputText = document.getElementById("input-text");
inputText.addEventListener("keydown", (event) => { //event is the parameter that is passed to the event listener function, it contains information about the event that occurred, such as the type of event, the target element, and any additional data related to the event. In this case, we are using the keydown event, which is triggered when a key is pressed down. The event object allows us to access properties such as event.key to determine which key was pressed and perform specific actions based on that key input.
    if(event.key === "Enter") {
        alert(`You entered: ${inputText.value}`);//This will display an alert box with the message "You entered: " followed by the value of the input text field. The inputText.value property retrieves the current value of the input field, allowing us to show what the user has typed when they press the Enter key.
        //the .value property of the inputText element is used to retrieve the current value entered by the user in the input field. When the user presses the Enter key, the event listener function is triggered, and it checks if the pressed key is "Enter". If it is, an alert box is displayed showing the message "You entered: " followed by the value of the input text field, which is obtained using inputText.value. This allows us to provide feedback to the user about what they have entered in the input field when they press Enter.
    }
    console.log(event.key);//The keydown event is triggered when a key is pressed down. The event object contains information about the event, including the key that was pressed. We can access the key property of the event object to get the value of the key that was pressed and log it to the console.
    //console.log(event);//This will log the entire event object to the console, which contains various properties and methods related to the keyboard event. You can inspect the event object to see details such as the key that was pressed, the type of event, and other relevant information.
    //The
    //The .key property of the event object will give you the value of the key that was pressed. For example, if you press the "A" key, event.key will return "a". If you press the "Enter" key, event.key will return "Enter". This allows you to determine which key was pressed and perform specific actions based on that key input.

    
});//The keyboard event is used to listen for keyboard events such as keydown, keyup, and keypress. In this case, we are listening for the keydown event, which is triggered when a key is pressed down. The event object contains information about the event, including the key that was pressed. We can access the key property of the event object to get the value of the key that was pressed and log it to the console.
