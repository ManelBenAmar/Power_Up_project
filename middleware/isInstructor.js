const isInstructor = (req, res, next) => {
    if (req.user.role == "instructor") {
        next();
    } else {
        res.send("you are not authorized");
    }
};
module.exports = isInstructor;
