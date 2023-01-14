const express = require('express');

// router is an express sub package to handle different routes reaching different end points with different http verbs
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /products'
    });
});

// '/:productID' productID is a variable 
router.get('/:productID', (req, res, next) => {
    const id = req.params.productID; // Extracting the product ID

    // To check is the param is being read properly
    if(id === 'special') {
        res.status(200).json({
            message: 'you discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'you passed an ID' 
        });
    }
});

router.patch('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product!'
    });
});

router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
});

module.exports = router;