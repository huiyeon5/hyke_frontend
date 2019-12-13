var express = require('express');
var router = express.Router();
const userValidator = require('../middleware/UserValidation');
const { userSchema } = require('../middleware/schemas');
const UserController = require('../controllers/UserController');
const User = require('../models/User');

// Get All users
router.get('/', async (req, res, next) => {
  User.find({}, function(err, users){
    if(err){
      console.log(err);
    } else{
      res.json(users);
    }
  })
})

// Get one user
router.get('/:id', async (req, res) => {
  UserController.findById(req.params.id);
})

//Sign Up User, Send JWT Token
router.post('/signup', userValidator(userSchema), async (req, res, next) => {
  UserController.signUp(req, res, next);
})

//Login, Generate JWT Token
router.post('/login', async (req, res) => {
  
})

// Delete one user
router.delete('/:id', async (req, res) => {
  UserController.deleteById(req.params.id);
})

module.exports = router;
