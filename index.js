const express = require("express");

const { Server } = require("http");

const server = express();

const PORT = 3000;

console.log("port: " + process.env.PORT);

server.listen(PORT, () => {
  console.log("Server listening.......");
});

server.get('/', (req, res) => {
    res.send('Hello World...')
})