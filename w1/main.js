console.log("hello from inside the main.js file")

//let myVar;

const myVar = 42;
const myVarType = typeof(myVar);
console.log("myVarType" + myVarType);
console.log(`myVarType ${myVarType}`)

function runNow () {
    if(myVarType === "number") {
        console.log(`this line will run`);
     } else {
        console.log(`will 13 this one run?`);
     }
}

runNow();
runNow();