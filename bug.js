const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user data using userId ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData);
});

//Problem: If userId is not a number, this will crash the server. It will throw a casting error inside the database query.
//Solution: Check if userId is a number before attempting to use it in the database operation.