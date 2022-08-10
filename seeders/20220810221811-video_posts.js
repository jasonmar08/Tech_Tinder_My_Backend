'use strict'

///// TEMPLATE

//  {
//     caption: '',
//     firstName: '',
//     lastName: '',
//     video_url: '',
//     userId: ,
//     createdAt: new Date(),
//     updatedAt: new Date()
//   }

const video_posts = [
  {
    caption: 'Fun day in the sun!',
    firstName: 'Mark',
    lastName: 'Zuckerberg',
    video_url: 'https://www.youtube.com/embed/Ibm3WhfLk08',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', video_posts)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', video_posts)
  }
}
