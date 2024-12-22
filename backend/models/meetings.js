const express = require('express');
const router = express.Router();
const db = require('../utils/database');

router.get('/', (req, res) => {
  res.json(db.getMeetings());
});

router.post('/', (req, res) => {
  const newMeeting = db.addMeeting(req.body);
  res.status(201).json(newMeeting);
});

router.put('/:id', (req, res) => {
  const updatedMeeting = db.updateMeeting(req.params.id, req.body);
  res.json(updatedMeeting);
});

router.delete('/:id', (req, res) => {
  db.deleteMeeting(req.params.id);
  res.status(204).send();
});

module.exports = router;
