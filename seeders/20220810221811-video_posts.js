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
    caption: 'Meta verse is gonna be the biggest thing yet!',
    video_url: 'https://www.youtube.com/embed/Ibm3WhfLk08',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'video',
    caption: 'Starlink will change everything!',
    video_url: 'https://www.youtube.com/watch?v=ck5z0uMGz8s',
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'video',
    caption: 'Southpark plays too much',
    video_url: 'https://www.youtube.com/watch?v=EAnbdaoaE60',
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'video',
    caption: 'Get to know me',
    video_url: 'https://www.youtube.com/watch?v=Pec-m1NXnr0',
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'video',
    caption: 'Wanna take a ride on my rocket?',
    video_url: 'https://www.youtube.com/watch?v=yRxeDOfDQhk',
    userId: 5,
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
