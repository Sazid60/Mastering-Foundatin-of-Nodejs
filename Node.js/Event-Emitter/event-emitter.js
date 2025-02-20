// event-emitter.js
// This file demonstrates how to use the Node.js EventEmitter class to create and handle events.

const EventEmitter = require("events");

// EventEmitter is a special class in Node.js used for handling events.
// Since EventEmitter is a class, we need to create an instance of it.
const myEmitter = new EventEmitter();

// Creating event listeners (subscribers)

// The .on() method is used to register event listeners.
// It means "listen for this event and execute the provided callback function when it occurs."

// First listener for the 'birthday' event
myEmitter.on('birthday', () => {
    console.log("Happy Birthday To You");  // This message will be logged when the event is emitted.
});

// Second listener for the 'birthday' event
myEmitter.on('birthday', (gift) => {
    console.log(`I will send a ${gift}`);  // This listener takes an argument 'gift' and logs it.
});

// Emitting (triggering) the 'birthday' event with an argument
// The emit() method triggers the event, executing all registered listeners for that event.
myEmitter.emit('birthday', 'watch');

// Explanation:
// - The first listener will run and print "Happy Birthday To You".
// - The second listener will receive 'watch' as the argument and print "I will send a watch".
