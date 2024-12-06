/**
 * Hoisting in Javascripts
 * 
 * Hoisting in js is a behaviour where a variable and function are moved to the top of their containing 
 * scope during the compilation phase.
 * This means that we can use variable and function before they are declared in the code. 
 * However , its important to note that only the declarations are hoisted, not the initializations
 */

/**
 * Variable hositing example
 * 
 * In js variable declared with var are hoisted, this means that variable are undefined until initialization line is reached
 */

console.log(myVar); // output: undefinded

var myVar = 10;

console.log(myVar) // output: 10



/**
 * Function hoisting example
 * 
 * Function declarations are also hoisted to the top of the their scope. This means that we can call function before it's declaration.
 */

console.log(greet())

function greet(){
  return "hello world";
}

/**
 * Function expression are not hoisted
 * Function expressions are not hoisted in the same way as function declarations. Only the variable declaration is hoisted, not the function assignment.
 */

console.log(myFunction()); // Type Error: `myFunction` is not a function.

const myFunction = function(){
  return 'heloo world'
}

/**
 * `let` and `const` Hoisting
 * Variable declared with let or const is also hoisted, but they are not initialized . This means that you cannot access them before the declaration.
 */

console.log(a); // Reference Error: Cannot access `a` before initialization

let a = 10;


/**
 * Summary
 * 
 * 1. Variable Declaration(var) are hoisted to top, initialized to `undeifined`.
 * 2. Function declaration hoisted on top
 * 3. Function expression : Only variable is hoisted not the function assignnment.
 * 4. `let` and `const` are hoisted but not initialized , resulting in Reference error if accessible before
 */
