var express = require('express');
var router = express.Router();
const User = require('../models/User')

/* GET ALL USERS */
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

// Get one user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById();
    res.json(user)
  } catch(err) {
    res.status(500).json({message: err.message})
  }
})

// Create one user
router.post('/', async (req, res) => {
  const user = new User({
    full_name: req.body.full_name,
    email: req.body.email,
    password: req.body.password,
    courses_owned: [],
    wish_list: []
  })

  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Update one user
router.patch('/:id', (req, res) => {
  
})

// Delete one user
router.delete('/:id', (req, res) => {
  
})

module.exports = router;
