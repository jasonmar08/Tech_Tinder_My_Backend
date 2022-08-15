const { Image_Post } = require('../models')

const GetPosts = async (req, res) => {
  try {
    const posts = await Image_Post.findAll()
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const CreatePost = async (req, res) => {
  try {
    const post = await Image_Post.create(req.body)
    res.send(post)
  } catch (error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  try {
    const post = await Image_Post.update(req.body, {
      where: { id: req.params.imagepost_id },
      returning: true
    })
    res.send(post)
  } catch (error) {
    throw error
  }
}

const DeletePost = async (req, res) => {
  try {
    await Image_Post.destroy({ where: { id: req.params.imagepost_id } })
    res.send({
      msg: 'Post Deleted',
      payload: req.params.imagepost_id,
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
