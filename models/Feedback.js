// Dependencies
const mongoose = require('mongoose');

// Schema
const feedbackSchema = new mongoose.Schema({
    user: {
        type: String,
        maxlength: 255,
        trim: true
    },

    rating: {
        type: Number,
        default: 0,
        trim: true
    },
    message: {
        type: String,
        maxlength: 255,
        trim: true
    },
    attachments: [String]
},

    {
        timestamps: true
    }
);

const Feedback = mongoose.model('Feedback', feedbackSchema);

// Export
module.exports = Feedback;