/**
 * Call Apply and Bind in JS
  In JavaScript, `call`, `apply`, and `bind` are methods available on functions that allow you to control the context (this) in which a function is executed.
  
  1. `call()` 
  
  Purpose: Invokes a function allow you to specify the `this` context and pass argument
  
  2. `apply()`
  
  Purpose: Invokes a function allow you to specify the `this` context and pass arguments as array.
  
  3. `bind()`
  Purpose : Create a new function with `this` context bound to specify value. It does not invokes the function immediately but return a new function that can be called later.
 */

  //  Example of call 

  const person = {
    firstName: 'niraj',
    lastName: 'kumar'
  }

  function greet(greeting, punctuation){
    console.log(`${greeting} ${this.firstName} ${this.lastName} ${punctuation}`);
  }

  greet.call(person, 'Hello', '!')  

  // Example of apply

  function greet(greeting, punctuation){
    console.log(`${greeting} ${this.firstName} ${this.lastName} ${punctuation}`);
  }

  greet.apply(person, ['Hello', '!'])

  // Example of Bind 

  const greetings = greet.bind(person);
  greetings('hey', '!!!')
