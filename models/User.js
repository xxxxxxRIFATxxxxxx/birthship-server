// Dependencies
const mongoose = require('mongoose');

// Schema
const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        maxlength: 255,
        trim: true
    },

    lname: {
        type: String,
        maxlength: 255,
        trim: true
    },

    mothersName: {
        type: String,
        maxlength: 255,
        trim: true
    },

    fathersName: {
        type: String,
        maxlength: 255,
        trim: true
    },

    address: {
        type: String,
        maxlength: 255,
        trim: true
    },

    gender: {
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

    dob: {
        type: String,
        maxlength: 255,
        trim: true
    },

    course: {
        type: String,
        maxlength: 255,
        trim: true
    },

    email: {
        type: String,
        maxlength: 255,
        trim: true
    }
},

    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

// Export
module.exports = User;