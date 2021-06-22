const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: Number,
    role: {
        type: String,
        enum: ["student", "instructor", "admin"],
        required: true,
        default: "student",
    },
    photoUrl: {
        type: String,
    },
    enrolledCourses: [
        {
            type: Schema.Types.ObjectId,
            ref: "course",
        },
    ],
    courses: [
        {
            type: Schema.Types.ObjectId,
            ref: "course",
        },
    ],
});

module.exports = User = model("user", userSchema);
