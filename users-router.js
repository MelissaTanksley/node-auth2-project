const router = require("express").Router();

const Users = require("./dbhelper");
const restricted = require("./middleware");

router.get("/", restricted, checkDepartment("user"), (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => res.send(err));
});

function checkDepartment(department) {
    // if the department of the logged in user matches the
    // "department" argument, let the request continue
    // otherwise return code 403
    return (req, res, next) => {
        if (req.jwt.department === department) {
            next();
        } else {
            res.status(403).json({ message: "You are not authorized" });
        }
    };
}

module.exports = router; 