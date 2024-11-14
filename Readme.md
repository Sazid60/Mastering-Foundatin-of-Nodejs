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
- Its highly cpu intensive task.
**But we can do sing worker thread**

### Node.js architecture depends on
- **V8 Engine** : Node.js runtime is based onn v8 engine written in c++ and javascript. Without v8 engine node.js would never understand javascript.
- **LIBUUV** : It is an open source library written on c++ which focuses on asynchronous I/O and gives node access to computer os, file system, networking, etc.
- Libuv implements 2 important parts of Node.js 
  - **Event Loop** : 1. executes callback functions, 2. Network I/o
  - **Thread Pool** : 1. Cpu Intensive tasks, 2. File Access, 3. File Compression, 4. Cryptography