const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId)) {
    return res.status(400).send('Invalid user ID');
  }
  // ... database operation using the validated userId ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData);
});