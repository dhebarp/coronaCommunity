const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
   
    venueName: {
        type: String,
        trim: true,
        required: [true, 'Please add the venue name']
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    visitDate: {
        type: Date,
        required: [true, 'Please enter the date visited']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model('Transaction', LocationSchema)