console.log(document);
console.log(document.title);
/* How to select element 
we can selecet element by Id using javascript, all you have to do is declar a variable and the variable name will represent the selected element */
const headTitle = document.getElementById("head-title");
console.log(headTitle);
console.log(headTitle.textContent);
/* What if i want to change content despite normal content from the html */
headTitle.textContent = "Welcome To DOM ";//This will change desipite the normal text in HTML. So i do here is that i assing the text content that is available in html head-title class i will be assigning it a new variable 
headTitle.classList.toggle("head-title");//Here i added a backgroundColor to the "Welcome To DOM " in the web page, the way i did is different that i have already styled it in my css (internal css) even without adding class to the tag so i just use toggle to add it since we don't have a class name in the tag usng toggle will add it 

/* QUERY SELECTOR The quary selector is universal it can work for both id and class, querySelector will only select the first matching css selector */
const firstPara = document.querySelector(".paragraph1");//Like here now in the html i have give an element a class name, so if i want to select that element using  querySelector i will use the .paragraph1 because i have already give it a class name in the html, but if it is 
console.log(firstPara);

firstPara.innerHTML = "<p>This is the first paragraph</p>";//This is innerHTML where you can insert a HTML tag as string, is like put another HTML tag iside one HTML tag (nesting) but the main content in the html will disappear while the one you insert from javascript will appear

/* querySelectorAll if we want to select element that has same class name that's when you are use the querySelectorAll. And querySelectorAll will put them inside an array which is called nodelist*/
const items = document.querySelectorAll(".items");
console.log(items);
/* I am try to loop through an array here Using the for loop  */
for (let i = 0; i < items.length; i++) { //i < items.length; This means 1 less than the total items in the array that is 1 < 5, 5 is the total items inside the array 
    items[i].textContent = `This is changed items ${i + 1}`;//items[i].textContent. Also here i want to change the content on html in js so i use .textContent, now items[i] is still working along side of the for loop just like the console.log below we are saying continue executing until the condition in the for loop is false, so what items[i] is doing is that it's picking each element and changing the content, You know items is that array so the items inside the array is [div.items, div.items, div.items, div.items, div.items,](You see the array in the console browser they are called nodelist). So now when the stuff is looping for the first time i = 0(for the starting point in the for loop) so when 1 is equals 0 them item[i] becomes items[0], that's items[0] is for the first div in the HTML that you want to change the content, so it goeas like that until the condition in the loop is also false 
    //console.log(items[i]);//So it will output all the items in the array for each of thier index that is when it is looping for the first time 1 = 0 (for the starting point) so item[i] will now become item[0], so it will print out the items that fall in that index of the array, Then it will loop for the second time (remember don't forget the 1++ that is the increment, it will be incresing by 1 after each loop) so it add i = 0 + 1, now 1 = 1 now it becomes items[1] it now print out the items that fall in that index in the array so that's it goes til the condition in the loop is false (i < items.length;)
}



/* GetElementByclassName */



/* MODIFYING ATTRIBUTE: 
To change the HTML Attribute you use the method setAttribute. The setAttribute takes in two parameters the first Parameter is name of the Attribute you're setting, The second parameter is the new vale you want the value of the parameter to be*/
const myLink = document.getElementById("link");
console.log(myLink);
/* myLink.setAttribute("href", "https://calebadelaja.github.io/My-Portfolio/"); */
myLink.href = "https://calebadelaja.github.io/My-Portfolio/";//This is also another way to set attribute

/* MODIFYING STYLES is just like styling or changing styles dynamically if you want to use js to style you wirte the  variable name .style.whatever you wan to style (css properties) */
/* myLink.style.color = "#fff"
myLink.style.backgroundColor = "#624f4f"
myLink.style.display = "block" */
//Let's say you want to write everything at once you use the object.assign
Object.assign(myLink.style, {
    color: "#fff",
    backgroundColor: "#624f4f",
    display: "block",
    padding: "10px",
    borderRadius: "5px",
    textDecoration: "none"
});

/* Adding and Removing Classes To add or remove classes with js we usin a keyword call .classList and the .add or the .remove keyword too we first attech the .classList and then .add if you wan to add new link or .remove if you wan to remove the link*/
/* myLink.classList.add("special-link"); */
/* myLink.classList.remove("test-link"); */
myLink.classList.toggle("test-link");//the toggle can add and remove, in the sense that it will add if the class name is not there and it will remove in the class name is there

/* How To Show Arrays of Data to the UI*/

//Here this are what i want to render to the UI we already have our products inside the array 
const products = [
    {productName: "Phone", price: 1500, size: 100, image:"images/phone.jpg"},
    {productName: "laptop", price: 2000, size: 300, image:"images/phone.jpg"},
    {productName: "Television", price: 3500, size: 380, image:"images/phone.jpg"},
    {productName: "Smart watch", price: 3500, size: 380, image:"images/phone.jpg"},
];

//So we use the forEach Method to loop (map) through each items(objects) inside the array
const productContainer = document.querySelector(".product-container");//We selected the tag in our javascript
products.forEach((product) => {//so this is the forEach method we used to loop or map through the item(object)
    const div = document.createElement("div");//I want to create a new element her usining the document.createElement("div")
    div.innerHTML = `<img src="${product.image}" width="100" class="product-image" > <h2>${product.productName}</h2>  <h3>${product.price}</h3>  <p>${product.size}</p> `;//Now this where i started putting all the products into the new div i created with inner.HTML you can see i use `` this and innerHTML Because innerHTML can accept tags
    productContainer.appendChild(div);//Here i attached a keyword called .appendChild to the element i selected in javascript, the .appendChild will give the capability to insert an element or tag inside another tag (like nesting tags)

    Object.assign(div.style, {//Here am trying to style the created div
        backgroundColor: "#000",
        padding: "10px",
        //margin: "10px",
        color: "white",
        whiteSpace: "noWrap",
        //display: "flex",
        //flexDirection: "column",
        //justifyContent: "center",
        //alignContent: "center"
    });
});



/* EVENT LISTNER */

/* document.getElementById("mysubmit").onclick = function(){
    let firstname = document.getElementById("text1").value;
    let lastName = document.getElementById("text2").value;
    let email = document.getElementById("text3").value;

    console.log(firstname);
    console.log(lastName);
    console.log(email);
} */


