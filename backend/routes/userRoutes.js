const express = require("express");
const { signUp, signIn } = require("../controllers/userControllers");
const router = express.Router();

//signup route
router.post("/signup", signUp);

//signin route
router.post("/signin", signIn);



module.exports = router;
