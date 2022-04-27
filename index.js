const express = require("express");

const { Server } = require("http");

const server = express();

const PORT = 3000;

server.listen(PORT, () => {
  console.log("Server listening...");
});

server.get('/', (req, res) => {
    res.send('Hello World...')
})