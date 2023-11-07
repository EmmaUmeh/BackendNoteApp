
const NoteControllers = require("../controllers/NoteControllers");
const UserControllers = require("../controllers/UserControllers");
const express = require("express");
const router = express.Router();

// NoteControllers
router.post("/createnote", NoteControllers.createNotes);
router.post("/editnote", NoteControllers.editNotes);

router.post("/createnote", UserControllers.register);
// router.post("/editnote", NoteControllers.editNotes);

module.exports = router;