const { Video_Post } = require('../models')

const GetPosts = async (req, res) => {
  try {
    const posts = await Video_Post.findAll()
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const CreatePost = async (req, res) => {
  try {
    const post = await Video_Post.create({ ...req.body })
    res.send(post)
  } catch (error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  try {
    const post = await Video_Post.update(req.body, {
      where: { id: req.params.videopost_id },
      returning: true
    })
    res.send(post)
  } catch (error) {
    throw error
  }
}

const DeletePost = async (req, res) => {
  try {
    await Video_Post.destroy({ where: { id: req.params.videopost_id } })
    res.send({
      msg: 'Post Deleted',
      payload: req.params.videopost_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPosts,
  CreatePost,
  UpdatePost,
  DeletePost
}
