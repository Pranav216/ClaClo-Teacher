
const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello Word! This is clacao-teacher subsystem')
})

module.exports = router;