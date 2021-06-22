const express = require("express");

const Course = require("../models/Course");
const router = express.Router();

// //test
//  /api/courses/test
router.get("/test", (req, res) => {
    res.send("this is test");
});

// //@ desc add new course
// //@method post
// //@req.body

router.post("/add", async (req, res) => {
    try {
        const { title, description, videoUrl, pdfUrl } = req.body;
        if (!title || !description) {
            return res.status(400).send("title and description are required");
        }
        const cours = await Course.findOne({ title });
        if (cours) {
            return res.status(400).send("course is already exist");
        }

        const course = new Course({
            title,

            description,
            videoUrl,
            pdfUrl,
        });
        await course.save();
        res.status(200).send({ msg: "course added", course });
    } catch (error) {
        res.status(500).send("impossible to add course");
    }
});

//@desc all courses
//@method get
router.get("/", async (req, res) => {
    try {
        const courses = await Course.find()
            .populate("user", "name - _id")
            .select();
        console.log(courses);
        res.status(200).send({ msg: "all courses", courses });
    } catch (error) {
        res.status(500).send("impossible to get courses");
    }
});

// @Method GET
// @desc GET one course
// @ Path: http://localhost:5000/api/courses/:id
// @Params id
router.get("/:id", async (req, res) => {
    try {
        const result = await Course.findOne({ _id: req.params.id });
        res.send({ response: result, message: "geting course successfully" });
    } catch (error) {
        res.status(400).send({ message: "there is no course with this id" });
    }
});

//@desc update course
//@method put
//@req.body
//@req.params

router.put("/:Id", async (req, res) => {
    try {
        const { Id } = req.params;
        //   const id=req.params.Id
        const course = await Course.findOneAndUpdate(
            { _id: Id },
            { $set: { ...req.body } }
        );
        res.status(200).send({ msg: "course edited", course });
    } catch (error) {
        res.status(500).send("impossible to edit courses");
    }
});
//@desc delete course
//@method delete
//@req.params
router.delete("/:Id", async (req, res) => {
    try {
        const { Id } = req.params;
        const course = await Course.findByIdAndDelete(Id);
        res.status(200).send({ msg: "course deleted", course });
    } catch (error) {
        res.status(500).send("impossible to delete courses");
    }
});

//get one instructor courses

router.get("/getInstructorCourses/:id", (req, res) => {
    Course.find({ instructor: req.params.id })
        .then((response) => res.json(response))
        .catch((err) => res.status(500).json(err));
});

module.exports = router;
