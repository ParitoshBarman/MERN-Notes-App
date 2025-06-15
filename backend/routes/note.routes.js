const express = require("express");
const { createNote, getNotes, updateNote, deleteNote, getNoteById} = require("../controllers/note.controller");
const auth = require("../middleware/auth.middleware");

const router = express.Router();

router.use(auth); // protect all routes below

router.post("/", createNote);
router.get("/", getNotes);
router.get("/:id", getNoteById);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

module.exports = router;
