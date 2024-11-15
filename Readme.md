# Mastering Foundation of Express.js 

## Module-7-0 What is Node.js a high level overview of node.js
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

## Module-7-1 What is module, commonjs vs esm

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

#### Builtin Modules :
- Path Modules
  ![alt text](image.png)

- learning link 
```js
https://nodejs.org/docs/latest/api/path.html
```
- Example 
```javascript
// index.js

// Builtin Modules

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

