'use strict'

//// USE THIS TEMPLATE TO ADD MORE USERS. ALL SOCIAL LINKS ARE OPTIONAL

// {
//     email: '',
//     firstName: '',
//     lastName: '',
//     password: '',
//     city: '',
//     state: '',
//     age: ,
//     gender: '',
//     orientation: '',
//     ig_link: '',
//     fb_link: '',
//     li_link: '',
//     pfp_link:'',
//     createdAt: new Date(),
//     updatedAt: new Date()
//   }

const users = [
  {
    email: 'test@test.com',
    firstName: 'Mark',
    lastName: 'Zuckerberg',
    password: 'test',
    city: 'Palo Alto',
    state: 'CA',
    age: 38,
    gender: 'Male',
    orientation: 'Female',
    ig_link: 'http://www.instagram.com/zuck',
    fb_link: 'https://www.facebook.com/zuck',
    pfp_link:
      'https://www.usmagazine.com/wp-content/uploads/2020/07/Mark-Zuckerberg-Spooks-the-Internet-With-Too-Much-Sunscreen-on-His-Face-in-Hawaii-01.jpg?w=1600&quality=86&strip=all',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', users)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users')
  }
}
