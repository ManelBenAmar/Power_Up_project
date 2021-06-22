const isAdmin = (req, res, next) => {
    if (req.user.role == "admin") {
        next();
    } else {
        res.send("you are not authorized");
    }
};
module.exports = isAdmin;
