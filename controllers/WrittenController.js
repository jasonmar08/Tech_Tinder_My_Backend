const { Written_Post } = require('../models')

const GetPosts = async (req, res) => {
  try {
    const posts = await Written_Post.findAll()
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const CreatePost = async (req, res) => {
  try {
    const post = await Written_Post.create({ ...req.body })
    res.send(post)
  } catch (error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  try {
    const post = await Written_Post.update(req.body, {
      where: { id: req.params.writtenpost_id },
      returning: true
    })
    res.send(post)
  } catch (error) {
    throw error
  }
}

const DeletePost = async (req, res) => {
  try {
    await Written_Post.destroy({ where: { id: req.params.writtenpost_id } })
    res.send({
      msg: 'Post Deleted',
      payload: req.params.writtenpost_id,
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
