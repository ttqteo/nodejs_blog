const express = require('express');
const router = express.Router();

const postController = require('../app/controllers/PostController');

router.get('/create', postController.create);
router.post('/store', postController.store);
router.get('/:id/edit', postController.edit);
router.patch('/:id/restore', postController.restore);
router.put('/:id', postController.update);
router.delete('/:id', postController.destroy);
router.delete('/:id/force', postController.forceDestroy);
router.get('/:slug', postController.show);

module.exports = router;