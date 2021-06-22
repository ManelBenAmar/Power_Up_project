const mongoose = require("mongoose");
const { model } = mongoose;

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: {
        type: String,
    },
    instructor: { type: Schema.Types.ObjectId, ref: "user" },
    description: {
        type: String,
    },
    videoUrl: {
        type: String,
    },
    pdfUrl: {
        type: String,
    },
    students: [{ type: Schema.Types.ObjectId, ref: "user" }],
});

module.exports = Course = model("course", courseSchema);
