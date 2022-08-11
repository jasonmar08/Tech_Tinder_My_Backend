const Router = require('express').Router()
const controller = require('../controllers/UserController.js')

Router.get('/all', controller.GetAllUsers)
Router.get('/male', controller.GetAllMales)
Router.get('/female', controller.GetAllFemales)
Router.get('/:user_id', controller.GetUserById)
Router.get('/likedme/:user_id', controller.getUsersAndLikedMe)
Router.get('/liked/:user_id', controller.getUserLikes)
/// don't think we need this since Auth does this but leave commented out for now
// Router.post('/create', controller.CreateUser)
Router.put('/:user_id', controller.UpdateUser)
Router.delete('/:user_id', controller.DeleteUser)

module.exports = Router
