const fs = require("fs")


// reading text asynchronously . This follows error callback pattern
// fs.writeFile(file, data[, options], callback)
fs.readFile('./texts/read.txt', 'utf-8', (err, data) => {
    if (err) {
        throw Error("ERROR Reading Text")
    }
    console.log(data);

    // writing text asynchronously
    // fs.writeFile(file, data[, options], callback)
    fs.writeFile('./texts/write.txt', data, 'utf-8', (err) => {
        if (err) {
            throw Error("Error Writing Data")
        }
    })
})

console.log('Testing Asynchronous');