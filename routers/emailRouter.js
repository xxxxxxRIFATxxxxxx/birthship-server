// Dependencies
const express = require('express');
const Email = require('../models/Email');

// Initialize
const emailRouter = express.Router();

// Get All Feedback
emailRouter.get('/', async (req, res) => {
    // Submit To Database
    try {
        const data = await Email.find({});
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

// Create Feedback
emailRouter.post('/', async (req, res) => {
    const newEmail = new Email(req.body);

    // Submit To Database
    try {
        const data = await newEmail.save();
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

// Update Feedback
emailRouter.put('/:id', async (req, res) => {
    const id = req.params.id;

    // Submit To Database
    try {
        const data = await Email.findByIdAndUpdate(id, req.body);
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

// Delete Feedback
emailRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;

    // Submit To Database
    try {
        const data = await Email.findByIdAndRemove(id);
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

// Single Feedback
emailRouter.get('/:id', async (req, res) => {
    const id = req.params.id;

    // Submit To Database
    try {
        const data = await Email.findById(id).exec();
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
module.exports = emailRouter;