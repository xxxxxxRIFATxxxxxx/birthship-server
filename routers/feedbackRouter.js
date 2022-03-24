// Dependencies
const express = require('express');
const multer = require('multer');
const path = require('path');
const Feedback = require('../models/Feedback');

// Initialize
const feedbackRouter = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads');
    },

    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname.replace(fileExt, "").toLocaleLowerCase().split(" ").join("-") + "-" + Date.now();
        cb(null, fileName + fileExt);
    }
});

const upload = multer({
    storage: storage
});

// Create Feedback
feedbackRouter.post('/', upload.array("attachments", 10), async (req, res) => {
    const { rating, message } = req.body;
    const attachments = [];
    req.files.forEach((file) => {
        attachments.push(file.filename);
    });

    const newFeedback = new Feedback(req.body);
    newFeedback.attachments = attachments;

    // Submit To Database
    try {
        const data = await newFeedback.save();
        res.status(200);
        res.send({
            result: data,
            message: "Success"
        })
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