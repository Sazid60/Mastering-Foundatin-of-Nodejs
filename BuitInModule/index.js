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
