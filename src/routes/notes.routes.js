const express = require('express');
const { default: mongoose } = require('mongoose');
const noteSchema = require('../models/notes.model');
const router = express.Router();

//Create note
router.post('/notes/add', (req, res) => {
    const note = noteSchema(req.body);
    note
    .save()
    .then(data => {
        res.json(data);
        mongoose.connection.close()
    })
    .catch((error) => res.json({message: error}));
});

//Get all notes
router.get('/notes/getAll', (req, res) => {
    noteSchema
    .find()
    .then(data => {
        res.json(data);
        mongoose.connection.close()
    })
    .catch((error) => res.json({message: error}));
});

//Get note by id
router.get('/notes/getById/:id', (req, res) => {
    const { id } = req.params;
    noteSchema
    .findById(id)
    .then(data => {
        res.json(data);
        mongoose.connection.close()
    })
    .catch((error) => res.json({message: error}));
});

//Get note by email
router.get('/notes/getByEmail/:email', (req, res) => {
    const { email } = req.params;
    noteSchema
    .findOne({ email: email })
    .then(data => {
        res.json(data);
        mongoose.connection.close()
    })
    .catch((error) => res.json({message: error}));
});

//Update note
router.put('/notes/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, image } = req.body;
    noteSchema
    .updateOne({ _id: id }, { $set: { name, email, image } })
    .then(data => {
        res.json(data);
        mongoose.connection.close()
    })
    .catch((error) => res.json({message: error}));
});

//Delete note
router.delete('/notes/delete/:id', (req, res) => {
    const { id } = req.params;
    noteSchema
    .remove({ _id: id })
    .then(data => {
        res.json(data);
        mongoose.connection.close()
    })
    .catch((error) => res.json({message: error}));
});

module.exports = router;