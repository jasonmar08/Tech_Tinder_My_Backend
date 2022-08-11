'use strict'

//// USE THIS TEMPLATE TO ADD MORE USERS. ALL SOCIAL LINKS ARE OPTIONAL

// {
//     email: '',
//     firstName: '',
//     lastName: '',
//     passwordDigest: '',
//     city: '',
//     state: '',
//     age: ,
//     gender: '',
//     orientation: '',
//     ig_link: '',
//     fb_link: '',
//     li_link: '',
//     pfp_link:'',
//     bio: '',
//     createdAt: new Date(),
//     updatedAt: new Date()
//   }

const users = [
  {
    email: 'mark@fb.com',
    firstName: 'Mark',
    lastName: 'Zuckerberg',
    passwordDigest: 'test',
    city: 'Palo Alto',
    state: 'CA',
    age: 38,
    gender: 'Male',
    orientation: 'Female',
    ig_link: 'http://www.instagram.com/zuck',
    fb_link: 'https://www.facebook.com/zuck',
    pfp_link:
      'https://www.usmagazine.com/wp-content/uploads/2020/07/Mark-Zuckerberg-Spooks-the-Internet-With-Too-Much-Sunscreen-on-His-Face-in-Hawaii-01.jpg?w=1600&quality=86&strip=all',
    bio: 'Just here to have fun',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'elon@tesla.com',
    firstName: 'Elon',
    lastName: 'Musk',
    passwordDigest: 'test',
    city: 'Boca Chica',
    state: 'TX',
    age: 51,
    gender: 'Male',
    orientation: 'Female',
    pfp_link:
      'https://e3.365dm.com/22/05/768x432/skynews-elon-musk_5780923.jpg?20220725073759',
    bio: 'Just here to have fun',
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
