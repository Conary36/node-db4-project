const express = require('express');

const Books = require('./books-model.js')

const router = express.Router();

router.get('/', (req, res) => {
    Books.find(req.query)
        .then(book => {
            res.status(200).json(book);
        })
        .catch(error => {
            // log error to server
            console.log(error);
            res.status(500).json({
                message: 'Error retrieving the hubs',
            });
        });
});

router.get('/:id', (req, res) => {
    Books.findById(req.params.id)
        .then(book => {
            if (book) {
                res.status(200).json(book);
            } else {
                res.status(404).json({ message: 'Hub not found' });
            }
        })
        .catch(error => {
            // log error to server
            console.log(error);
            res.status(500).json({
                message: 'Error retrieving the hub',
            });
        });
});

module.exports = router;