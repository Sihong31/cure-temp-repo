const express = require('express');
const router = express.Router();
const data = require('../data/carousel.json');

router.get('/api', (req, res) => {
	res.json(data);
});

module.exports = router;

