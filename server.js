const express = require('express');

const postRouter = require('./posts/postRouter.js');

const server = express();
server.use(logger);
server.use('/api/posts', postRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

function logger(req, res, next) {
  console.log(`${req.method} qequest to ${req.originalUrl} on ${Date()}`)
  next();
}

module.exports = server;
