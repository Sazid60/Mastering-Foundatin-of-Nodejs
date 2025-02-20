const fs = require("fs"); // Import the 'fs' module to work with the file system

// __________________ Reading text asynchronously
// fs.readFile(file, encoding, callback) - Reads the file asynchronously
// This follows the error-first callback pattern, a common practice in Node.js

fs.readFile('./texts/read.txt', 'utf-8', (err, data) => {
    if (err) {
        throw Error("ERROR Reading Text"); // If an error occurs, throw an error message
    }

    console.log("File Read Successfully:");
    console.log(data); // Logs the content of the file

    // __________________ Writing text asynchronously
    // fs.writeFile(file, data[, options], callback) - Writes data to a file asynchronously
    // Asynchronous file operations prevent blocking the main thread

    fs.writeFile('./texts/write.txt', data, 'utf-8', (err) => {
        if (err) {
            throw Error("Error Writing Data"); // If an error occurs during writing, throw an error
        }
        console.log("File Written Successfully");
    });
});

// This log will appear first because readFile() is asynchronous
console.log('Testing Asynchronous Execution');

// Explanation:
// - The file read operation starts asynchronously, meaning Node.js does not wait for it to finish before moving to the next line.
// - Meanwhile, 'Testing Asynchronous Execution' is printed to the console.
// - Once the file read is complete, the callback function executes, printing the file content.
// - Then, the file write operation starts, ensuring data is stored in 'write.txt' without blocking the main thread.
// - This is part of Node.js' non-blocking I/O model, which optimizes performance for large-scale applications.
