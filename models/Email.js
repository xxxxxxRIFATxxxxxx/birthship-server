// Dependencies
const mongoose = require('mongoose');

// Schema
const emailSchema = new mongoose.Schema({
    user: {
        type: String,
        maxlength: 255,
        trim: true
    },

    subject: {
        type: String,
        maxlength: 255,
        trim: true
    },

    title: {
        type: String,
        maxlength: 255,
        trim: true
    },

    header: {
        type: String,
        maxlength: 255,
        trim: true
    },

    footer: {
        type: String,
        maxlength: 255,
        trim: true
    },

    templateName: {
        type: String,
        maxlength: 255,
        trim: true
    },

    selectBy: {
        type: String,
        maxlength: 255,
        trim: true
    },

    state: {
        type: String,
        maxlength: 255,
        trim: true
    },

    city: {
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

const Email = mongoose.model('Email', emailSchema);

// Export
module.exports = Email;