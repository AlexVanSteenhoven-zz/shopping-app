const express = require('express');
const router = express.Router();

// description [METHOD]
// Post index route [GET]
router.get('/', (req, res, next) => {
    res.send('INDEX /posts');
});

// Create new posts [POST]
router.post('/', (req, res, next) => {
    res.send('CREATE POST /posts');
});

// Get new posts [GET]
router.get('/new', (req, res, next) => {
    res.send('NEW POST /posts/new');
});

// Show post [GET]
router.get('/:id', (req, res, next) => {
    res.send('SHOW /posts/:id');
});

// Edit post [GET]
router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/edit');
});

// Update post [PUT]
router.put('/:id', (req, res, next) => {
    res.send('UPDATE /posts/:id');
});

// Delete post [DELETE]
router.delete('/:id', (req, res, next) => {
    res.send('DELETE /posts/:id');
});

module.exports = router;
