# Mastering Foundation of Express.js 

## Module-7-1 What is Node.js a high level overview of node.js
- **Node.js** : Node.js is a ru time which runs javascript in server side. It converts javascript into V8 engine understandable machine code. 
### Node.js provides some modules:
- operating system modules
- File system modules
- Path modules
- Http module
- URL modules
- utility modules

### Why Node.js is popular?:
- We can use javascript on server side.
- Build highly scalable backend application.
- It is single threaded, event driven and works non-blocking I/o.
- Perfect for building data intensive streaming application. 

### Cons of Node.js
- Its highly cpu intensive task. since there are soo many process to be made blocked.
**But we can do using worker thread. worker thread does the cpu intensive tasks and made it easy**

### Node.js architecture depends on
- **V8 Engine** : Node.js runtime is based onn v8 engine written in c++ and javascript. Without v8 engine node.js would never understand javascript.
- **LIBUV** : It is an open source library written on c++ which focuses on asynchronous I/O and gives node access to computer os, file system, networking, etc.
- Libuv implements 2 important parts of Node.js 
  - **Event Loop** : 1. executes callback functions, 2. Network I/o
  - **Thread Pool** : 1. Cpu Intensive tasks, 2. File Access, 3. File Compression, 4. Cryptography
- Node.js transfers the intensive tasks to thread pool so that it takes less memory to make a task done.  

## Module-7-2 What is module, commonjs vs esm

### What is module ? 
- A module is an **isolated** (globally not accessible) and **reuseable** block of code that has its **Own Scope**.
- If we wrap something by a function it becomes isolated that means block scope. 
- To do that for small scale project we can use IIFE to do that. but for large scale project we can do that. Here came the modular system which takes the piece of code to an isolated environnement. 
- commonjs is used to make module(Used more in server side). 
- Esm module is also used to so(Used most with react which provides import syntax ).   

#### CommonJS vs ESM

| Feature                  | CommonJS           | ESM                   |
|--------------------------|--------------------|-----------------------|
| Import Syntax            | `require`          | `import`              |
| Export Syntax            | `module.exports`/`exports` | `export` / `export default` |
| File Extension           | `.js`              | `.mjs` (or `.js` in modern environments with `"type": "module"`) |

#### Module system types
1. Local Modules(we create)
2. Built in modules (come with node.js)
3. Third party module (created by others)

#### Local Module  :

```javascript
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
```
```javascript
// local-2.js

const add = (param1, param2, param3) => param1 + param2 + param3;
const a = 20 

module.exports = {
    a, add
}
```
```javascript
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
```

#### Builtin Path Modules :

- The path module in Node.js provides utilities for working with file and directory paths. It is particularly useful for manipulating and resolving file paths in a platform-independent way, ensuring your application runs consistently across operating systems like Windows, macOS, and Linux.
- learning link 
[Node.js Path Module Documentation](https://nodejs.org/docs/latest/api/path.html)

- Path Modules
  ![alt text](image.png)

- Example 
```javascript
// index.js

// Builtin path Modules

const path = require("path")

// path.dirname(path)
console.log(path.dirname("/D:/WORK/LEVEL-2/Mission-2/Module-3-Mastering-Foundatin-of-Expressjs/BuitInModule/index.js"));
// this will give the directory /D:/WORK/LEVEL-2/Mission-2/Module-3-Mastering-Foundatin-of-Expressjs/BuitInModule

console.log(path.parse("/D:/WORK/LEVEL-2/Mission-2/Module-3-Mastering-Foundatin-of-Expressjs/BuitInModule/index.js"));
// this will parse everything 

// output will be 
// {
//     root: '/',
//     dir: '/D:/WORK/LEVEL-2/Mission-2/Module-3-Mastering-Foundatin-of-Expressjs/BuitInModule',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }


// this works with joining paths
path.join('/D:/WORK/LEVEL-2/Mission-2/Module-3-Mastering-Foundatin-of-Expressjs/BuitInModule/', 'local-1.js');

```

## Module-7-3 Built in File System Module , synchronous vs asynchronous

### Synchronous file system 
 - The fs.readFileSync method in Node.js is used to read the contents of a file synchronously. It is part of the fs (file system) module and is useful when you need to read a file and process its content before continuing with the rest of your program.
 - [Node.js fs.readFileSync Documentation](https://nodejs.org/docs/latest/api/fs.html#fsreadfilesyncpath-options)

- The fs.writeFileSync method in Node.js is used to write data to a file synchronously. It is part of the fs (file system) module and ensures that the file is written before proceeding with the next line of code. This makes it a blocking operation, which is why it should be used with caution in certain scenarios.
  
- [Node.js fs.writeFileSync Documentation](https://nodejs.org/docs/latest/api/fs.html#fswritefilesyncfile-data-options)


```javascript
// file.js
const fs = require('fs')

// __________________ Reading a text
// const readText = fs.readFileSync('./read.txt')
// console.log(readText);
// in the console we will get buffer
{/* <Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 63 69 6e 67 ... 89959 more bytes> */ }


// if we want encoded text we have to use utf-8 with it
const readText = fs.readFileSync('./texts/read.txt', 'utf-8')
// console.log(readText);

// __________________ Writing a text a text
const writtenText = fs.writeFileSync('./texts/write.txt', readText + ' This is my written text');
  console.log('File written successfully');

  const readWrittenText = fs.readFileSync('./texts/write.txt', 'utf-8')

  console.log(readWrittenText);
  
```
- This is happening in synchronous way. and this is a blocking behavior.

- If we work files like this like we want works to be done in parallel way we have to do in asynchronous way. This is node.js architecture. we will send the heave tasks to the thread pool.

### Asynchronous file system 

- [Node.js fs.readFile Documentation](https://nodejs.org/docs/latest/api/fs.html#fsreadfilepath-options-callback)
- [Node.js fs.writeFile Documentation](https://nodejs.org/docs/latest/api/fs.html#fswritefilefile-data-options-callback)

```javascript
const fs = require("fs")


// reading text asynchronously . This follows error callback patter
// fs.writeFile(file, data[, options], callback)
fs.readFile('./texts/read.txt','utf-8', (err,data) =>{
    if(err){
        throw Error("ERROR Reading Text")
    }
    console.log(data);

    // writing text asynchronously
    // fs.writeFile(file, data[, options], callback)
    fs.writeFile('./texts/write.txt', data, 'utf-8',(err)=>{
        if(err){
            throw Error("Error Writing Data")
        }
    })
})

console.log('Testing Asynchronous');
```

## 7-4 Event driven architecture, create your own events
- Node.js core modules each are events
  
- [Node.js Events API](https://nodejs.org/docs/latest/api/events.html)

- Flow  : Cousin sent to shop to buy a chips. he will come back and call me that "vaiyya chips ansi" 
- Event Emitter(special type of instance object ) -->Event Listener --> CallaBack.
- The thing happening here is emitter will be emitting and event listener will listen and call the callback 

### Event Emitter
- [Node.js Event Emitter Documentation](https://nodejs.org/docs/latest/api/events.html#emitteremiteventname-args)

```javascript
// event-emitter.js
// emitter.emit(eventName[, ...args])

const EventEmitter = require("events")

//  as event emitter is a special instance object so we have to create instance 
const myEmitter = new EventEmitter ()

// create a listener

// .on means we are waiting j when it will happen. 
myEmitter.on('birthday', ()=>{
    console.log("Happy Birthday To You");
})

myEmitter.on('birthday', (gift)=>{
    console.log(`I will Send a ${gift}`);
})

// to make this happen we have to use emitter
// emitter.emit(eventName[, ...args])
myEmitter.emit('birthday', 'watch')
// whenever the birthday is emitted the event listener will be called
// here watch is gift parameter which will be received in second listener
```