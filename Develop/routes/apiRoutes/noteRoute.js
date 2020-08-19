const router = require('express').Router();
const { getNotes, saveNote } = require('../../public/assets/js/index');
const { notes } = require('../../db/db.json');




router.get('/notes', (req, res) => {
    const getNote = getNotes(req.body, notes);
    res.json(getNote);
});

router.post('/notes', (req, res) => {
    const savedNote = saveNote(req.body, notes);
    res.json(savedNote);
});



module.exports = router;