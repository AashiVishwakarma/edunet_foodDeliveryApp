const express = require('express');
const router = express.Router();

// Example route
router.post('/login', (req, res) => {
  res.send('Login successful!');
});

router.post('/register', (req, res) => {
  res.send('User registered!');
});

module.exports = router;
