const express = require('express');
const router = express.Router({ mergeParams: true });

// description [METHOD]
// review index route [GET]
router.get('/', (req, res, next) => {
    res.send('INDEX /reviews');
});

// Create new review [POST]
router.post('/', (req, res, next) => {
    res.send('CREATE review /posts/:id/reviews');
});

// Edit review [GET]
router.get('/:rev_id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/reviews/:rev_id/edit');
});

// Update review [PUT]
router.put('/:rev_id', (req, res, next) => {
    res.send('UPDATE /posts/:id/reviews/:rev_id');
});

// Delete review [DELETE]
router.delete('/:rev_id', (req, res, next) => {
    res.send('DELETE /posts/:id/reviews/rev_:id');
});

module.exports = router;
