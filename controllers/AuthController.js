const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        city: user.city,
        state: user.state,
        age: user.age,
        gender: user.gender,
        orientation: user.orientation,
        ig_link: user.ig_link,
        fb_link: user.fb_link,
        li_link: user.li_link,
        pfp_link: user.pfp_link,
        bio: user.bio
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}
const stayLogged = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true
    })
    let payload = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      city: user.city,
      state: user.state,
      age: user.age,
      gender: user.gender,
      orientation: user.orientation,
      ig_link: user.ig_link,
      fb_link: user.fb_link,
      li_link: user.li_link,
      pfp_link: user.pfp_link,
      bio: user.bio
    }
    let token = middleware.createToken(payload)
    return res.send({ user: payload, token })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    // const { email, password, name } = req.body
    let {
      email,
      firstName,
      lastName,
      password,
      city,
      state,
      age,
      gender,
      orientation,
      ig_link,
      fb_link,
      li_link,
      pfp_link,
      bio
    } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    // const user = await User.create({ email, passwordDigest, name })
    const user = await User.create({
      email,
      firstName,
      lastName,
      passwordDigest,
      city,
      state,
      age,
      gender,
      orientation,
      ig_link,
      fb_link,
      li_link,
      pfp_link,
      bio,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email }
    })

    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        req.body.oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(req.body.newPassword)
      await user.update({ passwordDigest })
      return res.send({ status: 'Success', msg: 'Password updated' })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}
const email = async (req, res) => {
  try {
    return sgMail.send(msg)
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession,
  stayLogged,
  email
}
