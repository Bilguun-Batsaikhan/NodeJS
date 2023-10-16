const http = require('http')
/*
* Here, the http module, which is a part of Node.js core modules, is imported. This module provides functionality for creating an HTTP server and handling HTTP requests and responses.
* */

// this call back function res.end('Welcome') will be invoked everytime when someone visits my server
// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()
/*
The http.createServer() function creates a new HTTP server instance. This server instance will be used to handle incoming HTTP requests.
* */


server.on('request', (req, res) => {
  if(req.url === '/') {
    res.end('Welcome')
  } else {
    res.end('???')
  }
})
/*
* The server.on('request', ...) code sets up an event listener for the 'request' event. Whenever the server receives an HTTP request, this event is triggered. The provided callback function takes two arguments: req (the request object) and res (the response object).
*In the context of the provided code, (req, res) are parameters of the callback function passed to the server.on() method.
In the callback function, res.end('Welcome') sends the response 'Welcome' back to the client. In a real application, you would typically send an HTML page, JSON data, or some other meaningful response based on the request.*/
server.listen(5000)

