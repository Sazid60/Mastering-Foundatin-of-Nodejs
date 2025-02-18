// file.js
const fs = require('fs')

// __________________ Reading a text
// fs.readFileSync(path[, options])
// const readText = fs.readFileSync('./texts/read.txt')
// console.log(readText);
// in the console we will get buffer
{/* <Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 63 69 6e 67 ... 89959 more bytes> */ }


// if we want encoded text we have to use utf-8 with it
const readText = fs.readFileSync('./texts/read.txt', 'utf-8')
// console.log(readText);

// __________________ Writing a text a text
// fs.writeFileSync(file, data[, options])
const writtenText = fs.writeFileSync('./texts/write.txt', readText + ' This is my written text');
  console.log('File written successfully');

  const readWrittenText = fs.readFileSync('./texts/write.txt', 'utf-8')

  console.log(readWrittenText);
  
//   - This is happening in synchronous way. and this is a blocking behavior.

// - If we work files like this like we want works to be done in parallel way we have to do in asynchronous way. This is node.js architecture. we will send the heave tasks to the thread pool.