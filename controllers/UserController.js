const { User, User_Like, User_view } = require('../models')

const GetAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}
const GetAllMales = async (req, res) => {
  try {
    const users = await User.findAll({ where: { gender: 'Male' } })
    res.send(users)
  } catch (error) {
    throw error
  }
}
const GetAllFemales = async (req, res) => {
  try {
    const users = await User.findAll({ where: { gender: 'Female' } })
    res.send(users)
  } catch (error) {
    throw error
  }
}
const GetUserById = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let user = await User.findAll({
      where: { id: userId }
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    let body = {
      ...req.body
    }
    let u = await User.create(body)
    res.send(u)
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let updated = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(updated)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    await User.destroy({ where: { id: userId } })
    res.send({ message: 'Deleted user with an id of ' + userId })
  } catch (error) {
    throw error
  }
}

const getUsersAndLikedMe = async (req, res) => {
  try {
    const liked = await User.findAll({
      where: { id: req.params.user_id },
      include: [{ model: User, as: 'liked_me', through: { attributes: [] } }]
    })
    res.send(liked)
  } catch (error) {
    console.log(error)
  }
}

const getUserLikes = async (req, res) => {
  try {
    const likes = await User.findAll({
      where: { id: req.params.user_id },
      include: [{ model: User, as: 'likes', through: { attributes: [] } }]
    })
    res.send(likes)
  } catch (error) {
    console.log(error)
  }
}
const LikeUser = async (req, res) => {
  try {
    let u = await User_Like.create({
      userId: parseInt(req.params.liked_userId),
      liked_userId: parseInt(req.params.user_id)
    })
    res.send(u)
  } catch (error) {
    throw error
  }
}
const ViewUser = async (req, res) => {
  try {
    let u = await User_view.create({
      userId: req.params.user_id,
      viewed_userId: req.params.viewed_userId
    })
    res.send(u)
  } catch (error) {
    throw error
  }
}
const getViewedUsers = async (req, res) => {
  try {
    const viewed = await User.findAll({
      where: { id: req.params.user_id },
      include: [{ model: User, as: 'viewed', through: { attributes: [] } }]
    })
    res.send(viewed)
  } catch (error) {
    console.log(error)
  }
}
const DeleteView = async (req, res) => {
  try {
    let u = await User_view.destroy({
      where: {
        userId: req.params.viewed_userId,
        viewed_userId: req.params.user_id
      }
    })
    res.send({ message: `Deleted view` })
  } catch (error) {
    throw error
  }
}
const DeleteLike = async (req, res) => {
  try {
    let u = await User_Like.destroy({
      where: {
        userId: req.params.liked_userId,
        liked_userId: req.params.user_id
      }
    })
    res.send({ message: `Deleted like` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUsers,
  GetAllMales,
  GetAllFemales,
  GetUserById,
  getUsersAndLikedMe,
  getUserLikes,
  CreateUser,
  UpdateUser,
  DeleteUser,
  LikeUser,
  DeleteLike,
  ViewUser,
  getViewedUsers,
  DeleteView
}
