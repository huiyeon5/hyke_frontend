const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  courses_owned: {
    type: Array,
    required: true,
  },
  wish_list: {
    type: Array,
    required: false
  }
})

module.exports = mongoose.model('users', userSchema);