const express = require('express');
const aiControllers = require('../controllers/ai.controller')

const router = express.Router();

router.post("/get-review", aiControllers.getReview);


module.exports = router;