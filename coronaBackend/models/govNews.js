const mongoose = require('mongoose');

const govNewsSchema = new mongoose.Schema({
   
    source: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    publishedAt: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model('govNews', govNewsSchema)