//need model
const Router = require('express').Router()
const controller = require('../controllers/WrittenController.js')
const middleware = require('../middleware')

Router.get('/all', controller.GetPosts)
Router.post(
  '/post',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreatePost
)
Router.put(
  '/:writtenpost_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePost
)
Router.delete(
  '/:writtenpost_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeletePost
)

module.exports = Router
