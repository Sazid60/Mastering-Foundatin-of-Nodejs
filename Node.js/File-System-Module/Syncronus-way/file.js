// file.js
// This script demonstrates reading and writing files using Node.js' 'fs' (File System) module.

const fs = require('fs'); // Import the 'fs' module to work with the file system

// __________________ Reading a text file (Synchronous)
// fs.readFileSync(path[, options]) - Reads the file synchronously and returns its content.

// Without specifying an encoding, the data will be returned as a Buffer.
// const readText = fs.readFileSync('./texts/read.txt');
// console.log(readText); 
// Output: <Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 ...>
// This is a binary representation of the file's content.

// To get human-readable text, specify 'utf-8' encoding.
const readText = fs.readFileSync('./texts/read.txt', 'utf-8');
console.log('Read Text:', readText); // This will print the actual text content of the file.

// __________________ Writing to a text file (Synchronous)
// fs.writeFileSync(file, data[, options]) - Writes data to a file synchronously.

// Writing the content of 'read.txt' to 'write.txt' and appending additional text.
fs.writeFileSync('./texts/write.txt', readText + ' This is my written text.');
console.log('File written successfully.');

// Reading the newly written file to verify its content
const readWrittenText = fs.readFileSync('./texts/write.txt', 'utf-8');
console.log('Written File Content:', readWrittenText);

// Explanation:
// - This process is synchronous, meaning the execution is blocked until the file operations are completed.
// - If we have multiple tasks running, this blocking behavior can slow down performance.
// - To handle file operations without blocking the main thread, we should use asynchronous methods (fs.readFile & fs.writeFile).
// - In Node.js, I/O-heavy operations should be delegated to the thread pool for better efficiency.

