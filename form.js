const express = require("express");

const { Server } = require("http");

const server = express();

const PORT = 3001;

server.listen(PORT, () => {
  console.log("Server listening...........");
});

server.post("/form", (req, res) => {
  const emailAddress = req.body.emailAddress;
  console.log(emailAddress);
  res.end()
  //res.send("Hello World");
});
