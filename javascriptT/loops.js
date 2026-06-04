//loops- Loop create repeatitive task until the condition is false, ;loop are use to repeate a block of code
//Don't create an endles loop 
 //for loop
/* for (let i = 1; i < 10; i++) {
    console.log(i)
} */
// We have the inital value of i, check the condition if the condition is true, the code in the for loop will run, after the code inside the for loop run then it will increase the value of i by 1. is like run, add and print
//the code block runs before the variable increases (increments)

/* let health = 100;
while (health > 0) {
  health -= 2; //health - 20 = 80(You see health is greater than 80, health > 0 is true), don't forget now health is 80 for now then now it take that 80 and minus by 20 now it's 60, now health is 60 then health is decrease by 20 again which is 40 now. THE WHOLE MEANING OS THIS IA JUST BE DECREASING HEALTH (health = 100) BY 20 UNTIL THIS STATEMENT(health > 0) IS FALSE
  console.log("Player hit! Health:", health);
} */
/* let i = 0;//Same here it check the value of i which 0 
while (i<=10){//here if i value is less than 10,
  console.log(i) //it will print it on the console
  i++ //we add this to increase the value of i, if we don't add this it will be an endles loop which will keep running and nerver stop because i is always true that i is always less than 10 
}   */

/* let name = "caleb"
for (let i = 0; i<name.length; i++){
  console.log(name.charAt(i))
} */

let currentAge = 20


for (let i = 0; i < 5; i++) {
    console.log(i);
}

let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum);