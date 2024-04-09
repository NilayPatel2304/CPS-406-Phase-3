// index.js

const express = require('express');
const app = express();
const membersRouter = require('./routes/members');

// Middleware to parse JSON request bodies
app.use(express.json());

// Route for members
app.use('/members', membersRouter);

// Root route handler
app.get('/', (req, res) => {
  res.send('Welcome to the Recreation Club API!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
