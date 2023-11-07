
const Notes = require("../models/NoteModel");


const createNotes = async (req, res) => {
  const { title, body, createdAt, updatedAt } = req.body;

  try {
    // Use the `requireAuth` middleware to check if the user is authenticated
    // You can access the user ID with `req.userId`
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    } else if (!body) {
      return res.status(400).json({ error: "Body is required" });
    }

    const createNote = new Notes({
      title,
      body,
      createdAt,
      updatedAt,
      userId: req.userId, // Associate the note with the user
    });

    const existingNotesCount = await Notes.countDocuments({ title, userId: req.userId });

    if (existingNotesCount >= 1) {
      return res.status(400).json({ error: "You can't create more than two notes with the same title" });
    }

    await createNote.save();
    res.status(201).json({ msg: "Note Created Successfully" });
  } catch (error) {
    console.error("Error while creating Note", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const editNotes = async (req, res) => {
  const { _id, title, body } = req.body;

  try {
    if (!_id) {
      return res.status(400).json({ error: "Note ID is required" });
    }

    const updatedNote = await Notes.findOneAndUpdate(
      { _id, userId: req.userId }, // Ensure the user owns the note
      { title, body },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.status(200).json({ msg: "Note Edited Successfully", note: updatedNote });
  } catch (error) {
    console.error("Error while editing Note", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createNotes, editNotes};
