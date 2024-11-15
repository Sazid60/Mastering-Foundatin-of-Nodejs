// index.js

// imported and used here

// if we just exported one
// const add = require('./local-1.js')

// if we just exported many
// const myModule = require('./local-1.js')

// we can also do destructuring
const {a,add} = require('./local-1.js')

//  in case of destructuring if variable name s are similar we have to use name alias
const {a :a2,add :add2} = require('./local-2.js')


// if we just one thing on the export we can use this kind of things 
// console.log(add(2,3));


// if we have exported multiple things we have to use this because we have a variable and a function
// console.log(myModule.add(2,3)); 

// if we do destructuring
console.log(add(2,3)); 
console.log(a);

console.log(add2(2,3)); 
console.log(a2);

console.log(myModule);