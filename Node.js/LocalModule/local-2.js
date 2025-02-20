// local-2.js

// Function to add three parameters and return the sum
const add = (param1, param2, param3) => param1 + param2 + param3;

// Declaring a constant variable 'a' with a value of 20
const a = 20;

// Exporting the variable 'a' and the function 'add' 
// so they can be used in other files using require()
module.exports = {
    a,
    add
};
