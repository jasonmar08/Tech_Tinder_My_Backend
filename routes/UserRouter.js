const Router = require('express').Router()
const controller = require('../controllers/UserController.js')
const middleware = require('../middleware')

Router.get('/all', controller.GetAllUsers)
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

  controller.getUsersAndLikedMe
)
Router.get(
  '/liked/:user_id',

  controller.getUserLikes
)
Router.get(
  '/view/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getViewedUsers
)
Router.get(
  '/viewme/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getUserViewMe
)
Router.post(
  '/view/:user_id/:viewed_userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.ViewUser
)
Router.delete(
  '/view/:user_id/:viewed_userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteView
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

Router.post('/like/:user_id/:liked_userId', controller.LikeUser)
Router.delete(
  '/like/:user_id/:liked_userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteLike
)
Router.delete(
  '/likedMe/:liked_userId/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteLikedMe
)

module.exports = Router
