/**
 * Higher order function in JS
 * 
 * 
 * Higher order function is a function that either :
 * 1. one or more function as an arguments 
 * 2. or return a function as its value
 * 
 * Characteristic of Higher Order Function
 * 1. Function as a first class citizen meaning it can be assigned to variable, pass as argument to other function , or return from another function.
 * 
 * 2. Many build in function in js like map, filter, reduce is a Higher order function.
 * All callback function are HOF(Higher Order Function)
 */


// Example

function progressPrint(math, science){
  console.log(`Total marks is : ${math + science}`)
}

function calculateResult(math, science, callback){
  callback(math, science)
}

calculateResult(65, 89, progressPrint)