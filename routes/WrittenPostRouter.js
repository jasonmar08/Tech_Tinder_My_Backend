//need model
const Router = require('express').Router()
const controller = require('../controllers/UserController.js')
const middleware = require('../middleware')

Router.get(
  '/writtenposts',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllWrittenPosts
)
Router.post(
  '/writtenposts/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateWrittenPost
)
Router.put(
  '/writtenposts/:writtenpost_id',
  middleware.stripToken,
  middleware.UpdateWrittenPost
)
Router.delete(
  '/writtenposts/:writtenpost_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteWrittenPost
)

module.exports = Router
