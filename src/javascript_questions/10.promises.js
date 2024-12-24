/**
 * Promise: promise are returned object that represent eventual completion of an asynchronous operations.\
 * Earlier we used callback function for asynchronous task , It traps into problem called callback hell and loosing of control.
 * Due to nested call back (http://callbackhell.com/) modularity and most prone to error handling.
 *
 * Handle callback hell
 * 1. Keep your code shallow
 * 2. Modularize
 * 3. Handle every single error
 * 
 * 
 * But now Promise provide the modularity and the error handling functionality way more feasible.
 * With some nice composition operation that often helpful
 * 
 * Promises provide a more readable and manageable way to handle asynchronous code compared to traditional callbacks.
 * 
 * Promise has three state
 * 1. Pending: Its the initial state of promise.
 * 2. Fulfilled: Operation completed successfully.
 * 3. Failed: Operation failed.
 * 
 * Promises provide three method
 * 1. then() method: To handle fulfillment state
 * 2. catch() method: To handle rejection state
 * 3. finally() method: Execute regardless of the promise outcome.
 */

const promise = new Promise((resolve, reject) => {
  const success = true; // Simulate success or failure
  if (success) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed!");
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));


  /**
   * Promise Composition
   * 1. Promise.all()
   * 2. Promise.race()
   * 3. Promise.allSettled()
   * 4. Promise.any()
   */


  /**
   * Promise.all()
   * 
   * When any one of the promise failed it returned failed,else return fulfilled promise
   */

  let promise1 = Promise.resolve(3);
  let promise2 = 42;
  let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });
  
  Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); // [3, 42, "foo"]
  });
  

  /**
   * promise.race()
   * Whichever promise completed first it return no matter failed or successfully
   */

   promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
   promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise1, promise2]).then((value) => {
    console.log(value); // "two"
  });
  

  /**
   * Promise.allSettled()
   * returns a promise that only fulfills once all of the input promises have settled (either fulfilled or rejected).
   */


   promise1 = Promise.resolve(3);
   promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
   promises = [promise1, promise2, 'bar'];
  
  Promise.allSettled(promises).then((results) =>
    results.forEach((result) => console.log(result.status))
  );
  // "fulfilled"
  // "rejected"
  // "fulfilled"
  
  /**
   * Promise.any() return promise as soon as one of the promises in the array fulfills, with the value of that promises fulfills.
   */

  promise1 = Promise.reject(0);
  promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'quick'));
  promise3 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'slow'));
  
  const promises = [promise1, promise2, promise3];
  
  Promise.any(promises).then((value) => {
    console.log(value); // "slow"
  }).catch((e) => {
    console.error(e);
  });
  

/**
 * Promises and their composition provide a powerful and flexible way to handle asynchronous operations in JavaScript. By using methods like then(), catch(), finally(), and composition techniques like Promise.all(), Promise.race(), Promise.allSettled(), and Promise.any(), you can manage complex asynchronous workflows more effectively.
 */