const myName = "Mary Vang";
const myAge = 143;

const jsIsWeird = myName + myAge

console.log(jsIsWeird)
console.log(typeof jsIsWeird)
console.log(typeof myAge)


//what is order of precedence
//write an example

//const results =
//console.log(results)

const amIhungry = true;
console.log(typeof amIhungry);

let myVar;
console.log(typeof myVar);

const myHeading = document.querySelector("h1");
console.log(typeof myHeading)

const myPet = "cat";
const myPetName = "Money";
const myPetAge = 2

console.log("I have a " + myPet + " her name is" + myPetName + " and she is" + myPetAge + " years old");
const outputString = `I have a  ${myPet} her name is ${myPetName} and she is  ${myPetAge} years old.`;
myHeading.textContent = outputString;