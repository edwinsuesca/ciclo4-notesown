const express = require('express');
const userSchema = require('../models/user.model');
const router = express.Router();

//Create user
router.post('/users/add', (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Get all users
router.get('/users/getAll', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Get user by id
router.get('/users/getById/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Get user by email
router.get('/users/getByEmail/:email', (req, res) => {
    const { email } = req.params;
    userSchema
    .findOne({ email: email })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Update user
router.put('/users/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, image } = req.body;
    userSchema
    .updateOne({ _id: id }, { $set: { name, email, image } })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Delete user
router.delete('/users/delete/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router;