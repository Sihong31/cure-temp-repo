const express = require('express');
const router = express.Router();
const data = require('../data/data');

router.get('/test', (req, res) => {
	res.send({ contests: data.contests });
});

module.exports = router;

