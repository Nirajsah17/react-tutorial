// Q. What are scope explain with example


/**
In JavaScript, scope defines the accessibility or visibility of variables, functions, 
and objects in a particular part of the code.It determines where a variable can be used 
and whether it is accessible.

There mainly three types of scope in javascript

1. Global scope = If a varibale is is declared outside of any function or block are in global scope
 and accessible across the program 
2. Local Scope = Variable that defines in function or block scope are in local scope and not acessible outside it.
3. Block scope = variable declared with let and const have block scope, It means they are only acessible only in {} parenthesis.
*/


// 1. Global Scope

let globalVAr = 'i am niraj'

function accessGlobal(){
  console.log(globalVAr); // Acessible here
}
accessGlobal();

console.log(globalVAr) // Acessible here


// 2. Local Scope

function localScopeExample() {
    let localVar = "I am niraj";
    console.log(localVar); // Accessible here
}

localScopeExample();
console.log(localVar); // Error: localVar is not defined


// 3. Block Scope


if (true) {
    let blockScopedVar = "I am block scoped";
    console.log(blockScopedVar); // Accessible here
}
console.log(blockScopedVar); // Error: blockScopedVar is not defined


// Q. What are Scope chain 

/**
  When a variable is accessed, JavaScript searches through the scope chain:
  1. First, it looks in the current scope.
  2. If not found, it searches in the outer (parent) scope.
  3. It continues this process until it reaches the global scope.
 */

let globalVar = "I am global";

function outerFunction() {
  let outerVar = "I am outer";

  function innerFunction() {
    let innerVar = "I am inner";
    console.log(globalVar); // Accessible (from global scope)
    console.log(outerVar); // Accessible (from outer function)
    console.log(innerVar); // Accessible (from local scope)
  }

  innerFunction();
}

outerFunction();
