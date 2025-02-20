// index.js

// Importing and using the module we created in 'local-1.js'

// If we exported only one function or variable from 'local-1.js'
// const add = require('./local-1.js');
// This means that we can use the function directly: console.log(add(2, 3));

// If we exported multiple things (like a function and a variable) from 'local-1.js'
// const myModule = require('./local-1.js');
// Now, we access the exported properties using myModule.add or myModule.a

// We can also use object destructuring to extract specific exports
const { a, add } = require('./local-1.js'); // Extracts `a` and `add` directly

// If we import from another module (e.g., 'local-2.js'), 
// and the variable names conflict, we can use named aliases
const { a: a2, add: add2 } = require('./local-2.js');
// Here, `a2` is an alias for `a`, and `add2` is an alias for `add` from 'local-2.js'

// If we exported only one item, we can call it directly like this:
// console.log(add(2,3)); 

// If we exported multiple items as an object, we would access them like this:
// console.log(myModule.add(2,3)); 

// Since we used destructuring, we can call the function and log the variable directly
console.log(add(2, 3)); // Calls the `add` function from 'local-1.js'
console.log(a);         // Logs the variable `a` from 'local-1.js'

console.log(add2(2, 3)); // Calls the `add` function from 'local-2.js'
console.log(a2);         // Logs the variable `a` from 'local-2.js'

// If `myModule` was imported (without destructuring), we could log the entire object
console.log(myModule); // This will throw an error because `myModule` is not defined 
// (we used destructuring instead of assigning `require` to a variable)
