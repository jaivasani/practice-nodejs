const express = require('express');
const router = express.Router();

// GET Request
router.get('/', (req, res) => {
    res.send('Hello world');
});

module.exports = router;