// stream-buffer.js

const http = require('http');
const fs = require('fs')
// creating server using raw node.js

// http.createServer([options][, requestListener])

const server = http.createServer()

// listener
server.on('request', (req, res) => {
    // console.log(req);
    // console.log(req.url, req.method);
    if (req.url === '/read-file' && req.method === 'GET');

    // fs.createReadStream(path[, options])
    // streaming file reading
    // const readableStream = fs.createReadStream(process.cwd() +'/texts/read.txt') //same kaj 
    const readableStream = fs.createReadStream(__dirname + '/texts/read.txt')

    readableStream.on('data', (buffer) => {
        res.write(buffer)
    })

    readableStream.on('end', () => {
        res.end('Hello From Atipara')
    })

})

server.listen(5000, () => {
    console.log('Server running from atipara');
})