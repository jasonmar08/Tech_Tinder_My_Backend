const Router = require('express').Router()
const controller = require('../controllers/UserController.js')
const middleware = require('../middleware')

Router.get(
  '/all',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllUsers
)
Router.get(
  '/male',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllMales
)
Router.get(
  '/female',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllFemales
)
Router.get(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUserById
)
Router.get(
  '/likedme/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getUsersAndLikedMe
)
Router.get(
  '/liked/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getUserLikes
)
/// don't think we need this since Auth does this but leave commented out for now
// Router.post('/create', controller.CreateUser)
Router.put(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateUser
)
Router.delete(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteUser
)

module.exports = Router
