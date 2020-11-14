const express = require("express");
const User = require("./userModel");

const router = express.Router();

router.post("/signup", async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    const newUser = await user.save();
    if (newUser) {
        res.send({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
        })
    } else {
        res.status(401).send({ msg: "Invalid User Data" })
    }
})

router.post("/signin", async (req, res) => {

    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    });
    if (signinUser) {
        res.send({
            _id: signinUser._id,
            name: signinUser.name,
            email: signinUser.email,
            password: signinUser.password,
        })
    } else {
        res.status(401).send({ msg: "Invalid Email or Password" })
    }
})

module.exports = router;