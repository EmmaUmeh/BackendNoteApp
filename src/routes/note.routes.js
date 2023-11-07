
const NoteControllers = require("../controllers/NoteControllers");
const express = require("express");
const router = express.Router();


router.post("/createnote", NoteControllers.createNotes)
router.post("/editnote", NoteControllers.editNotes)

module.exports = router;