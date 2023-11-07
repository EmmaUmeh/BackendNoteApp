const Notes = require ("../models/NoteModel");

const createNotes = async (req, res) => {

  const { title, body, createdAt, updatedAt } = req.body;

  try {
    const createNote = new Notes({
      title,
      body,
      createdAt,
      updatedAt,
    });

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    } else if (!body) {
      return res.status(400).json({ error: "Body is required" });
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
  
      const updatedNote = await Notes.findByIdAndUpdate(
        _id,
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
  



module.exports = { createNotes, editNotes }