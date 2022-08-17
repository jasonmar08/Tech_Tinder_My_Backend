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
  },
  {
    type: 'image',
    caption: 'A beautiful blastoff!',
    img_url:
      'https://media.wired.com/photos/5ed2b8129948303154121fe5/master/pass/Science_SpaceX-Launch-AP_20151700829737.jpg',
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'image',
    caption: 'The last time I was happy',
    img_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrY-MtvBIMjleyv13T0V2Aph5HkW7Cw4VTlA&usqp=CAU',
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'image',
    caption: 'Love my new apple watch',
    img_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVON5krebsw_TDQlr3jCH8N2hdyJ4zj3c6w&usqp=CAU',
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'image',
    caption: 'The cowboy hat stays on',
    img_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCVsEN3hwJ95KmHJSwsx1uhdPG8PYvKOPm-Q&usqp=CAU',
    userId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'image',
    caption: 'My favorite show, so relateable',
    img_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3XpAvCQspFzO1BWMi4qw5C8z_X0fi1Sv4A&usqp=CAU',
    userId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'image',
    caption: 'Check out my book!',
    img_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWg46PV0u2a8qkBl51ccx3My19vF4dL5zF5g&usqp=CAU',
    userId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'image',
    caption: 'We are getting so close on the AI front',
    img_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVBvWxNEVuQLpbZs3O3MYNl7Bul2-GhNcZg&usqp=CAU',
    userId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'image',
    caption: 'Felt cute, might merge with your company later',
    img_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Vf5UmKrgmOtyrfhpY_-MKeo9NWYHbSBDiA&usqp=CAU',
    userId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    type: 'image',
    caption: "If this doesn't get you super excited then we won't get along",
    img_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_RLUjGaCan3JbhxWI5K4Tar3A4xTh3YUeg&usqp=CAU',
    userId: 10,
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
