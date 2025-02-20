// local-1.js

// This file is already in the CommonJS module system by default, 
// meaning all variables and functions are isolated within this file 
// and are not globally accessible unless explicitly exported.

// Function to add two numbers
const add = (param1, param2) => param1 + param2;

// A simple variable declaration
const a = 10;

// Exporting a single function
// module.exports = add; 
// If we do this, we can only export one entity, and the file importing it would use: 
// const add = require('./local-1');  
// Then we could call the function directly as: add(2, 3)

// Exporting multiple values (both function and variable)
// When we need to export multiple values, we assign them as properties of an object.
module.exports = {
    a,  // Exporting the variable `a`
    add // Exporting the function `add`
};

// Now, in another file where we import this module, we must access the properties of the exported object:
// const myModule = require('./local-1');
// console.log(myModule.add(2, 3));  // Accessing the `add` function
// console.log(myModule.a);  // Accessing the variable `a`

// This means we are adding the `add` function and variable `a` 
// to the module’s `exports` object, making them accessible in other files.

// Logging the `module` object to see its structure and contents
console.log(module);
