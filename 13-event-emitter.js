// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34)
/*Emitting an event means triggering that event.*/

/*
In the customEmitter.on method, the second argument is a callback function. This callback function will be executed whenever the event named 'response' is emitted.
*In programming, a callback function is a function that is passed as an argument to another function and is executed after the completion of a specific task. Essentially, it's a way to ensure that a particular code is executed only after another code has finished executing.
* 'response': This is the event name. You're telling the event emitter that you want to listen for an event named 'response'. You can choose any string as the event name.
*/