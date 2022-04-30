const express = require("express");

const { Server } = require("http");

const server = express();

var listener = server.listen(process.env.PORT || 3000, () => {
  const PORT = listener.address().port;
  console.log(`Server listening on port: ${PORT}`);
});

server.get('/', (req, res) => {
    res.send('Hello World...')
})