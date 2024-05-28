const Note = require('../models/exampleModel');

// Function to get all notes
const getNotes = async () => {
  try {
    const notes = await Note.find({});
    return notes;
  } catch (err) {
    throw new Error('Error fetching notes: ' + err.message);
  }
};

// Function to save a note
const saveNote = async (note) => {
  try {
    const newNote = new Note({
      content: note.content,
    });
    const savedNote = await newNote.save();
    return savedNote;
  } catch (err) {
    throw new Error('Error saving note: ' + err.message);
  }
};

module.exports = { getNotes, saveNote };
