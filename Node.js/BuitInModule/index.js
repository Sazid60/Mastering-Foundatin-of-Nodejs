// index.js

// Built-in Modules
const path = require("path"); // Import the 'path' module, which provides utilities for working with file and directory paths

// Example 1: Get the directory name of a given file path
console.log(path.dirname("/D:/WORK/LEVEL-2/Mission-2/Module-3-Mastering-Foundatin-of-Expressjs/BuitInModule/index.js"));
// Output: "/D:/WORK/LEVEL-2/Mission-2/Module-3-Mastering-Foundatin-of-Expressjs/BuitInModule"
// The `dirname()` method extracts and returns the directory portion of the specified file path

// Example 2: Parse a file path into an object containing details about its components
console.log(path.parse("/D:/WORK/LEVEL-2/Mission-2/Module-3-Mastering-Foundatin-of-Expressjs/BuitInModule/index.js"));
/* Output:
{
    root: '/',  // The root directory of the path
    dir: '/D:/WORK/LEVEL-2/Mission-2/Module-3-Mastering-Foundatin-of-Expressjs/BuitInModule', // The directory path excluding the file
    base: 'index.js', // The file name with extension
    ext: '.js', // The file extension
    name: 'index' // The file name without extension
}
*/

// Example 3: Join paths dynamically to create a full file path
const filePath = path.join(
    "/D:/WORK/LEVEL-2/Mission-2/Module-3-Mastering-Foundatin-of-Expressjs/BuitInModule/",
    "local-1.js"
);
console.log(filePath);
// Output: "/D:/WORK/LEVEL-2/Mission-2/Module-3-Mastering-Foundatin-of-Expressjs/BuitInModule/local-1.js"
// The `join()` method intelligently concatenates paths, automatically handling slashes and ensuring a valid path structure
