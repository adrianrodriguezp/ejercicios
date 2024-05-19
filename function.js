let globalVar = 10;

function myFunction() {
  let localVar = 20;
  console.log("Inside myFunction: globalVar = " + globalVar + ", localVar = " + localVar);
}

myFunction();
console.log("Outside myFunction: globalVar = " + globalVar);