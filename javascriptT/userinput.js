//User Input- Showing some pop up boxes that users are going to interacte with
//alert box - it shows users some information and just okay
/* alert("Hello world, am caleb"); */

//confirm box - 
/* confirm("you're live"); */
/* myBoolean = confirm("Your're live");
console.log(myBoolean); */

//prompt box - The prompt bos make users to input infomation and if the user input anything you see it in the console
let myName = prompt("please enter your name");
if (myName) {
    console.log(myName ?? " No name inputed");
} else {
    console.log("No name inputed")
}
 