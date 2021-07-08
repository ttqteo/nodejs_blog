const express = require('express');
const router = express.Router();

const blogController = require('../app/controllers/BlogController')

router.use('/:slug', blogController.show);
router.use('/', blogController.index);

module.exports = router;