/**
 * Closure 
 * 
 * A closure in js is a feature where an inner function has access the variable of outer function 
 * even after outer function is returned.
 * This allow "inner function" to remember the environment where it was created , including
 * the variables and their values at the time of its creation.
 * 
 * 
 * Closure are powerful because they enable data encapsulation and can be used to 
 * created private varibale and methods.
 */


function outerFunction(){
  let outerVariable = 10;
  function innerFunction(){
    console.log(outerVariable);
  }
  return innerFunction
}

const closure = outerFunction();
closure(); // output : 10


// Closure with params

function createCounter(){
  let count = 0;
  return function(){
    count++;
    return count;
  }
}

const counter = createCounter();

console.log(counter());  // output: 1
console.log(counter());  // output: 2
console.log(counter());  // output: 3