const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const messageSchema = mongoose.Schema({
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    name: {
        type: ObjectId,
        ref: "user",
    },
});

module.exports = Message = mongoose.model("message", messageSchema);
