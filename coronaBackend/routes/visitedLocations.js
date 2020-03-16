const express = require('express');
const router = express.Router();
const { getLocations, addLocation} = require('../controllers/locationsController');

router
.route('/')
.get(getLocations)
.post(addLocation);

// router
// .route('/:id')
// .delete()

module.exports = router;