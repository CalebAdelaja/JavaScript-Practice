'use strict'; // This will enable strict mode which will change the behavior of the this keyword
console.log(this); // This will return the global object which is window in the browser

function myFunction(){
    console.log(this); // This will also return the global object which is window in the browser
}
myFunction();
const myObject = {
    name: "caleb",
    age: 30,
    myMethod: function(){
        console.log(this); // This will return the object that is calling the method which is myObject
        console.log(this.age - 21); // This will return the object that is calling the method which is myObject
    }
};
myObject.myMethod();// This will return 9 because this.age is 30 and 30 - 21 is 9. The object before the dot (myObject) is calling the function. so this === myObject, so this.age is the same as myObject.age which is 30. so it will be 30 - 21 which is 9

const myObject2 = {
    name: "christopher",
    age: 25,
}

myObject2.myMethod = myObject.myMethod; // This will assign the method from myObject to myObject2 we are using same fuction from myObject but we are calling it with different object so this will refer to the object that is calling the method which is myObject2
myObject2.myMethod(); // This will return 4 because this.age is 25 and 25 - 21 is 4

const person = {
    name: "caleb",
    age: 21,
    mySelf: function(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`); // This will return the object that is calling the method which is person
    }
};
console.log(person); // This will return the object that is calling the method which is person
person.mySelf(); // This will return "My name is caleb and I am 21 years old." because this.name is "caleb" and this.age is 21 so it will return "My name is caleb and I am 21 years old." so this is how the this keyword works in JavaScript it refers to the object that is calling the method. so when we call person.mySelf() it will refer to person as this, so this.name is person.name which is "caleb" and this.age is person.age which is 21 so it will return "My name is caleb and I am 21 years old."
const anotherPerson = Object.create(person); // This will create a new object that inherits from person so anotherPerson is now inheriting from person so it has access to the mySelf method and also it has access to the properties of person but it does not have its own properties yet so it will return undefined if we try to access the properties of anotherPerson
console.log(anotherPerson); // This will return an empty object because we haven't added any properties to it yet but it is inheriting from person so it has access to the mySelf method and also it has access to the properties of person but it does not have its own properties yet so it will return undefined if we try to access the properties of anotherPerson
anotherPerson.name = "christopher";
anotherPerson.age = 21;
console.log(anotherPerson); // This will return the object that is calling the method which is anotherPerson because we have added the properties to anotherPerson so it will return {name: "christopher", age: 21} and it also has access to the mySelf method because it is inheriting from person so it will return the object that is calling the method which is anotherPerson when we call anotherPerson.mySelf() it will refer to anotherPerson as this, so this.name is anotherPerson.name which is "christopher" and this.age is anotherPerson.age which is 21 so it will return "My name is christopher and I am 21 years old."
console.log(anotherPerson.name); // This will return "christopher" because this.name is anotherPerson.name which is "christopher"
anotherPerson.mySelf(); // This will return the object that is calling the method which is anotherPerson because anotherPerson is inheriting from person so it has access to the mySelf method and when we call it with anotherPerson it will refer to anotherPerson as this, so this.name is anotherPerson.name which is "christopher" and this.age is anotherPerson.age which is 21 so it will return "My name is christopher and I am 21 years old.