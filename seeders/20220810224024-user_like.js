'use strict'

/// TEMPLATE

// {
//     userId: ,
//     liked_userId:,
//     createdAt: new Date(),
//     updatedAt: new Date()
//   }

const users = [
  {
    userId: 1,
    liked_userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user_likes', users)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user_likes')
  }
}
