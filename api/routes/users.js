var express = require('express');
var router = express.Router();
const User = require('../models/User')
const UserController = require('../controllers/UserController');

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

router.post('/signup', async (req, res) => {

})

router.post('/login', async (req, res) => {
  
})
// Create one user
router.post('/', async (req, res) => {
  
})

// Update one user
router.patch('/:id', (req, res) => {
  
})

// Delete one user
router.delete('/:id', (req, res) => {
  
})

module.exports = router;
