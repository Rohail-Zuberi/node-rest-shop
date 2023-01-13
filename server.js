// Importing http from node.js
const http = require('http');
const app = require('./app');

// Port at which the project will run   // Getting it from env var or hard code it
const port = process.env.PORT || 3000;

// Creating a server // there is a parameter called listener that works whenever there is a new request
const server = http.createServer(app);

// To start the server and start listening on the port  // Then it will execute the listener in createServer()
server.listen(port);