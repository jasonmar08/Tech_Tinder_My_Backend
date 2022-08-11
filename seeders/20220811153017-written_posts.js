'use strict'

//// TEMPLATE:

// {
//   title: '',
//   text: '',
//   userId: ,
//   createdAt: new Date(),
//   updatedAt: new Date()
// }

const written_posts = [
  {
    title: 'Living my best life!',
    text: 'Just started an apprenticeship at a startup called Tesla. Grateful and excited for this opportunity. Counting my blessings everyday. #Blessed #ElonIsTheGoat',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('written_posts', written_posts)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('written_posts', written_posts)
  }
}
