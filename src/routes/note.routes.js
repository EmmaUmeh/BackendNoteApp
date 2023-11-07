
const NoteControllers = require("../controllers/NoteControllers");
const UserControllers = require("../controllers/UserControllers");
const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth")

// NoteControllers
router.post("/createnote", requireAuth, NoteControllers.createNotes);
router.post("/editnote", requireAuth, NoteControllers.editNotes);

router.post("/createnote", UserControllers.register);
// router.post("/editnote", NoteControllers.editNotes);

module.exports = router;