/* 

1)Did you understand event loop ? Please explain it in your words if you did. If you didnt please raise a question in next class.
-->The event loop is a fundamental concept in JavaScript that enables asynchronous programming.JavaScript is single - threaded, which means it can only do one thing at a time
*/

const http = require('http');

const routes = require('./route');

const server = http.createServer(routes);

server.listen(3000);

