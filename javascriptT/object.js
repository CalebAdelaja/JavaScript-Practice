const mySelf = {
    name: "caleb",
    school: "University of ilesa, Osun State",
    department: "Computer Science",
    matricNumber: 9449,
    description: "I am a frontend developer working with JS",
};
/* Name, School, depaertment, matricnumber are called key */
console.log(mySelf);
console.log(mySelf.department);//If you wan to get or access only the value of any key by using the dot notation, 
console.log(mySelf.matricNumber);
mySelf.email = "calebadelaja0@gmail.com";//If you want to add more properties to the object
console.log(mySelf);
console.log(mySelf["email"]);//If you wan to get or access only the value of any key by using the square bracket notation
console.log(mySelf.description);

/* ARRAY OF OBJECT */
const products = [
    {productName: "Phone", price: 1500, size: 100},
    {productName: "laptop", price: 2000, size: 300},
    {productName: "Television", price: 3500, size: 380},
];
console.log(products);
/* console.log(products.length); */
console.log(products[2]);
console.log(products[0].productName);//Here i access the first items in the array, then use the productName to get the key value
show.innerHTML += 'Name: ' + products[2].productName + ', ' + `</br>`
show.innerHTML += 'Price: ' + products[2].price + ', ' + `</br>`    
show.innerHTML += 'Size: ' + products[2].size

products.push({productName:"printer", price: 1600, size: 250} );
console.log(products);
console.log(products.length);

/* Looping through the array objects */
for(let i = 0; i < products.length; i++){
    console.log(products[i].price);
};

products.forEach((prod) => console.log(prod));

/* Mapping the array */
const accessries = products.map((name) => name.productName)
console.log(accessries);

/* Find Method */
const highestSize = products.find((name) => name.size > 100);
console.log(highestSize);

/* Filter Method */
const greaterSize = products.filter((name) => name.size > 100);
console.log(greaterSize);
const lowerSize = products.filter((name) => name.size < 300);
console.log(lowerSize);

/* Reduce Method */
const totalSize = products.reduce((acc, curr) => acc + curr.size, 0);
console.log(totalSize);
const highestSizes = products.reduce((acc, curr) => curr.size > acc.size ? curr : acc);
const lowestSizes = products.reduce((acc, curr) => curr.size < acc.size ? curr : acc);
console.log(highestSizes);
console.log(highestSizes.size);
console.log(lowestSizes);
console.log(lowestSizes.size);
