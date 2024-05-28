const router = require('express').Router();
const { getNotes, saveNote } = require('../controllers/exampleController');

// Route to get all notes
router.get('/notes', async (req, res) => {
  try {
    const notes = await getNotes();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to save a note
router.post('/notes', async (req, res) => {
  try {
    const note = req.body;
    const savedNote = await saveNote(note);
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
