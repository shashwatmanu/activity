const express = require("express");
const router = express.Router();
const {getUsers, getUserById, searchUsers} = require("../controllers/users.controllers")
const verifyAuth = require("../middlewares/verifyAuth")


router.get("/", verifyAuth, getUsers)

router.get("/search/", searchUsers)
router.get("/:uuid", getUserById)

module.exports = router; 

