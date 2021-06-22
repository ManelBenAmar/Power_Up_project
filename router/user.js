const express = require("express");
const { Register, Login } = require("../controllers/user.controllers");
const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/isAdmin");
const {
    validation,
    registerValidate,
    loginValidate,
} = require("../middleware/validateUser");
const User = require("../models/User");
const Message = require("../models/Message");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("testing router");
});

/*
@method: POST
@ path:http:localhost:5000/api/user/register
@ parameter: req.body  
public
*/
router.post("/register", registerValidate(), validation, Register);

/* @method: POST
@ path:http:localhost:5000/api/user/login
@ parameter: req.body  
public
*/
router.post("/login", loginValidate(), validation, Login);
/*
@method: GET
@ path:http:localhost:5000/api/user/current
@ parameter: req.headers  
public
*/
router.get("/current", isAuth, (req, res) => {
    res.send({ msg: "authorized", user: req.user });
});

// Admin options

//@desc all users
//@method get
router.get("/userslist", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send({ msg: "all users", users });
    } catch (error) {
        res.status(500).send("impossible to get users");
    }
});
// @desc    Get all instructors
// @route   GET /api/users/instructorslist
// @access  Private/Admin
router.get("/instructorslist", async (req, res) => {
    try {
        const instructors = await User.find({ role: "instructor" }).select(
            "-password"
        );
        res.status(200).send(instructors);
    } catch (error) {
        res.status(500).send({ msg: "server error" });
    }
});
// @desc    Get all students
// @route   GET /api/users/studentslist
// @access  Private/Admin
router.get("/studentslist", async (req, res) => {
    try {
        const students = await User.find({ role: "student" }).select(
            "-password"
        );
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send({ msg: "server error" });
    }
});

//@desc delete user
//@method delete
//@req.params
router.delete("/:Id", async (req, res) => {
    try {
        const { Id } = req.params;
        const user = await User.findByIdAndDelete(Id);
        res.status(200).send({ msg: "user deleted", user });
    } catch (error) {
        res.status(500).send("impossible to delete user");
    }
});

// get student by id

router.get("/oneStudent", isAuth, async (req, res) => {
    try {
        const student = await User.findOne({ _id: req.user._id }).populate(
            "enrolledCourses"
        );
        res.status(200).send(student);
    } catch (error) {
        res.status(500).send({ msg: "server error" });
    }
});

// update enrolledcourse
router.put("/updateCourse/:id_course", isAuth, async (req, res) => {
    try {
        const id_user = req.user._id;
        const id_course = req.params.id_course;
        await User.updateOne(
            { _id: id_user },
            { $push: { enrolledCourses: id_course } }
        );
        res.status(200).send({ msg: "course updated" });
    } catch (error) {
        res.status(500).send({ msg: "can not update cours", error });
    }
});

// //get instructor by id

router.get("/:id", async (req, res) => {
    try {
        const result = await User.findOne({ _id: req.params.id }).populate(
            "courses"
        );
        res.send({ response: result, message: "geting user successfully" });
    } catch (error) {
        res.status(400).send({ message: "there is no user with this id" });
    }
});

// default export
module.exports = router;
