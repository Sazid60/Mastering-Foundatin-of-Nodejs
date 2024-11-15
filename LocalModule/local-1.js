// local-1.js

// this is already in common js modular system by default so its isolated and globally not accessible 
const add = (param1, param2) => param1 + param2

const a = 10;

// module.exports = add // if we want to set one 
// if we want to sett multiple things to be exported we have to make an object and set in export object
module.exports = {
    a, add
}
// if we do this we have to use console.log(myModule.add(2,3)) type things in where we want to import;

// this means we are adding (add function) into the modules export object which will make the function accessible in other files
console.log(module);