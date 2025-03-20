// Q. Curring in JS

/**
Debouncing is a programming concept used to limit the number of times a function is executed.
  It ensures that a function is executed only after a certain period of time has passed since the last time it was invoked.
  This technique is particularly useful for optimizing performance in scenarios where a function is called frequently,
  such as during window resizing, keypresses, or scrolling.

  Key Features 
  1. Reduces Excessive Function Calls - Ensures the function executes only once after the specified delay.
  2. Improves Performance - Minimizes the number of resource-heavy operations.
  3. Delay Execution - Waits for a consistent idle period before running the function.
 */

function curry(a){
  return function (b){
    return function(c){
      return a + b + c;
    }
  }
}

const res = curry(3)(5)(8)
console.log(res)