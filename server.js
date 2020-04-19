const express = require("express"); // import the express package

const recipeRouter = require('./books/books-router.js')

const server = express(); // creates the server

server.use(express.json());

server.use('/api/recipes', recipeRouter);

server.get("/", (req, res) => {
  const nameInsert = req.name ? ` ${req.name}` : "";

  res.send(`
    <h2> Recipe Book API</h2>
    <p> Hey ${nameInsert}, Let's see these recipes!</p>
    `);
});

module.exports = server;