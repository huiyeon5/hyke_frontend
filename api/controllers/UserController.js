module.exports = {
  signUp: async (req, res, next) => {
    const user = new User({
      full_name: req.body.full_name,
      email: req.body.email,
      password: req.body.password,
      courses_owned: [],
      wish_list: []
    })
  
    try {
      const newUser = await user.save()
      return res.status(201).json(newUser)
    } catch (err) {
      next(err)
      return res.status(400).json({ message: err.message })
    }
  }
}