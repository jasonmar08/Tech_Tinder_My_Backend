'use strict'

///// TEMPLATE

//  {
//     caption: '',
//     video_url: '',
//     userId: ,
//     createdAt: new Date(),
//     updatedAt: new Date()
//   }

const video_posts = [
  {
    type: 'video',
    caption: 'Fun day in the sun!',
    video_url: 'https://www.youtube.com/embed/Ibm3WhfLk08',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('video_posts', video_posts)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('video_posts', video_posts)
  }
}
