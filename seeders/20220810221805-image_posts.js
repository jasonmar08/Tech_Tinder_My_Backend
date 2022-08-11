'use strict'

//// TEMPLATE:

// {
//     caption: '',
//     img_url:'',
//     userId: ,
//     createdAt: new Date(),
//     updatedAt: new Date()
//   }

const image_posts = [
  {
    type: 'image',
    caption: 'Fun day in the sun!',
    img_url:
      'https://img.buzzfeed.com/buzzfeed-static/static/2021-04/27/20/asset/5bc9aff542d8/sub-buzz-855-1619555313-21.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('image_posts', image_posts)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('image_posts', image_posts)
  }
}
