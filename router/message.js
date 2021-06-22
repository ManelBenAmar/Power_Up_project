const express = require("express");

const Message = require("../models/Message");
const router = express.Router();

// //test
//  /api/message/test
router.get("/test", (req, res) => {
    res.send("this is test");
});

//Post message
router.post("/add", async (req, res) => {
    try {
        const { subject, message } = req.body;
        const newMessage = new Message({
            subject,
            message,
            name: req.user,
        });
        await newMessage.save();
        res.status(200).send({ msg: "message added", newMessage });
    } catch (error) {
        res.status(500).send("impossible to add message");
    }
});

//get message
router.get("/", async (req, res) => {
    try {
        const message = await Message.find().populate("name");
        res.send(message);
    } catch (error) {
        console.error(error);
        res.status(500).json({ errors: error.message });
    }
});

module.exports = router;
