// Dependencies
const mongoose = require('mongoose');

// Schema
const feedbackSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
        default: 0,
        trim: true
    },
    message: {
        type: String,
        maxlength: 255,
        required: true,
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