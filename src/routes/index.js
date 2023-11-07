
const express = require("express")
const router = express.Router();

const Noteroutes = require("../routes/note.routes")

router.use("/notes", Noteroutes)



module.exports = router;