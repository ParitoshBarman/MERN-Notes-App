const Note = require("../models/Note.model");

exports.createNote = async (req, res) => {
    const note = await Note.create({ ...req.body, userId: req.userId });
    res.status(201).json(note);
};

exports.getNotes = async (req, res) => {
    const notes = await Note.find({ userId: req.userId });
    res.json(notes);
};

exports.getNoteById = async (req, res) => {
    try {
        const note = await Note.findOne({ _id: req.params.id, userId: req.userId });

        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.json(note);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


exports.updateNote = async (req, res) => {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(note);
};

exports.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
};
