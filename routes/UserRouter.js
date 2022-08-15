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
Router.get(
  '/view/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getViewedUsers
)
Router.post(
  '/view/:user_id/:viewed_userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.ViewUser
)
Router.delete(
  '/view/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteUser
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

Router.post(
  '/like/:user_id/:liked_userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.LikeUser
)
Router.delete(
  '/like/:user_id/:liked_userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteLike
)

module.exports = Router
