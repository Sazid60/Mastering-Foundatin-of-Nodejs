const http = require('http'); // Import the 'http' module to create a server
const fs = require('fs'); // Import the 'fs' module to handle file operations

// Creating an HTTP server using Node.js without any external frameworks
const server = http.createServer(); // Create a server instance

// Event listener for incoming requests
server.on('request', (req, res) => {
    // Logging request details (uncomment for debugging)
    // console.log(req);
    // console.log(req.url, req.method);

    // Check if the request is a GET request to the "/read-file" route
    if (req.url === '/read-file' && req.method === 'GET') {

        // Creating a readable stream to read the file in chunks
        // fs.createReadStream(path[, options])
        // The __dirname variable refers to the current directory of this script
        // Using streams allows us to read large files efficiently without loading them all into memory at once
        const readableStream = fs.createReadStream(__dirname + '/texts/read.txt');

        // Event listener for when data is being read from the file
        readableStream.on('data', (buffer) => {
            res.statusCode = 200; // Set success response status
            res.write(buffer); // Send the data chunk to the client
        });

        // Event listener for when the file reading is complete
        readableStream.on('end', () => {
            res.statusCode = 200;
            res.end('The streaming is over'); // End the response
        });

        // Event listener for handling errors during file reading
        readableStream.on('error', (error) => {
            console.log(error); // Log the error to the console
            res.statusCode = 500; // Internal server error status
            res.end('Something went wrong'); // Send an error message to the client
        });
    }
});

// Start the server and listen on port 5000
server.listen(5000, () => {
    console.log('Server running from Atipara');
});

// Explanation:
// - This server listens for HTTP requests and responds by streaming the contents of 'read.txt'.
// - Using streams ensures that the file is read in chunks instead of loading the whole file into memory.
// - The `data` event sends chunks of the file to the client as they are read.
// - The `end` event signals that the file has been fully transmitted.
// - The `error` event handles any file read errors gracefully.
// - This method is efficient and suitable for handling large files without blocking the event loop.
