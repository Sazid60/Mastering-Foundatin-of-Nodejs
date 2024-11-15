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