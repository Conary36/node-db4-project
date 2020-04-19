const express = require("express"); // import the express package

const recipeRouter = require('./')

const server = express(); // creates the server

server.use(express.json());

server.use('/api/recipes', recipeRouter);

server.get('/', (req, res)=>{
  const name
})
