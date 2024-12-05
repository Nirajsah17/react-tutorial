/**
 * Map , Filter, Reduce 
 * 
 * 
 * In javascript `map` , `filter` and `reduce ` are higher order array methods, that help us to perform function operation on array elements
 * 
 * 1. Map `map()`
 * 
 * 
 * Purpose : Create a new array populated with a result of provided function on every elements.
 * Iterate over each elements and transform elements with provided function and return new array with transformed elements
 * 
 * 
 * 2. Filter(filter())
 * 
 * Purpose: Create a new array with all elements that passes the test[specific condition].
 * Iterate over each elements of the array , applies test on each elements and return new array with all test passed value.
 * 
 * 3. Reduce(reduce) 
 * 
 * Purpose: Applies a function to an accumulator and each elements in the array [from left to right] to reduce the array to a single value.
 * `reduce()` takes a callback function that receives an accumulator and the current value as arguments and then returns the updated accumulator value.
 * The final result is a single value like sum, product or object.
 * 
 * Example are below
 */


// Example of map()


const numbers = [1, 2, 3, 4];

const doubleNumbers = numbers.map((num)=> num * 2)


console.log('double',doubleNumbers)


// Example of filter()


const evenNumbers = numbers.filter((num)=> num % 2 === 0)

console.log('even number = ',evenNumbers)


// Example of reduce

const sum = numbers.reduce((acc, num)=> acc + num, 0)
console.log("sum = ", sum)