const User = require('../models/User');
const JWT = require('jsonwebtoken');
const Joi = require('joi');
const { JWT_SECRET } = require('../passport/jwtConfig');

signToken = user => {
  return JWT.sign({
    iss: 'hyke_backend',
    sub: user.id
  }, JWT_SECRET);
}

module.exports = {
  // DONE
  signUp: async (req, res, next) => {
    try {
      const { full_name, email, password } = req.body;
      const foundUser = await User.exists({email});
      if(foundUser) {
        return res.status(422).json({ 
          message: 'Invalid request, user already exists', 
          data: req.body 
        }) 
      }
      const user = new User({
        full_name, email, password,
        courses_owned: [],
        wish_list: []
      })
  
      const newUser = await user.save();
      const token = signToken(newUser);
      return res.status(201).json({token, newUser})
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  },

  signIn: async (req, res, next) => {
    
  },

  findById: async (id) => {
    try {
      const user = await User.findById(id);
      return res.json(user)
    } catch(err) {
      return res.status(500).json({message: err.message})
    }
  },

  deleteById: async (id) => {
    try {
      await User.findByIdAndDelete(id);
      return res.status(200).json({message: "User Deleted"})
    } catch(err) {
      return res.status(500).json({message: err.message})
    }
  }
}