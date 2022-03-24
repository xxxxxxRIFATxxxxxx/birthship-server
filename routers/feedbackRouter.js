// Dependencies
const express = require('express');
const Feedback = require('../models/Feedback');

// Initialize
const feedbackRouter = express.Router();

// Create Feedback
feedbackRouter.post('/', async (req, res) => {
    const newFeedback = new Feedback(req.body);

    // Submit To Database
    try {
        const data = await newFeedback.save();
        res.status(200);
        res.send({
            result: data,
            message: "Success"
        });
    }

    catch (error) {
        res.status(error.status || 500);
        res.send({
            error: error.message
        });
    };
});

// Export
module.exports = feedbackRouter;