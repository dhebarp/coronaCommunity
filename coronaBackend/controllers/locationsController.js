const Location = require('../models/visitedLocations');

//@desc GET all transactions
//@route GET /api/vi/transactions
//@access public

exports.getLocations = async (req, res, next) => {
    try {
        const locations = await Location.find();

        return res.status(200).json({
            success: true,
            data: locations
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

//@desc POST add transaction
//@route POST /api/vi/transactions
//@access public
exports.addLocation = async (req, res, next) => {
    try {
        const {venueName, address, visitDate, geometry } = req.body;
        const location = await Location.create(req.body);

        return res.status(201).json({
            success: true,
            data: location
        });
    } catch (err) {
        if (err.name == 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);

            res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}