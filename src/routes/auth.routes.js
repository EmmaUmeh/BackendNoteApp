
const UserControllers = require("../controllers/UserControllers");
const express = require("express");
const router = express.Router();


router.post("/register", UserControllers.register);
// router.post("/editnote", NoteControllers.editNotes);

module.exports = router;