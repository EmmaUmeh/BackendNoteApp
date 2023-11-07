
const express = require("express")
const router = express.Router();

const Noteroutes = require("../routes/note.routes")
const Authroutes = require("../routes/auth.routes")


router.use("/notes", Noteroutes)
router.use("/auth", Authroutes)



module.exports = router;