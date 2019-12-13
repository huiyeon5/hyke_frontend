const Joi = require('joi'); 
module.exports = {
  userSchema: Joi.object({
    full_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(16).required()
  }),
}