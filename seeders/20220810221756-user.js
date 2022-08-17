'use strict'

//// USE THIS TEMPLATE TO ADD MORE USERS. ALL SOCIAL LINKS ARE OPTIONAL

// {
//     email: '',
// firstName: '',
// lastName: '',
// passwordDigest: '',
// city: '',
// state: '',
// age: ,
// gender: '',
// orientation: '',
// ig_link: '',
// fb_link: '',
// li_link: '',
// pfp_link:'',
// bio: '',
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
  },
  {
    email: 'babycomeback@gatesfoundation.org',
    firstName: 'Bill',
    lastName: 'Gates',
    passwordDigest: 'test',
    city: 'Medina',
    state: 'WA',
    age: 66,
    gender: 'Male',
    orientation: 'Female',
    pfp_link:
      'https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga311881_bill_gates.jpg',
    bio: 'Melinda please come back :(',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'tcook@apple.com',
    firstName: 'Tim',
    lastName: 'Cook',
    passwordDigest: 'test',
    city: 'Cupertino',
    state: 'CA',
    age: 61,
    gender: 'Male',
    orientation: 'Male',
    pfp_link:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwAA1qkgD5n7prKtV1HNkqxTXtszZCQ-vzxQ&usqp=CAU',
    bio: "Don't bother messaging if you have an android.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'rocketman@amazon.com',
    firstName: 'Jeff',
    lastName: 'Bezos',
    passwordDigest: 'test',
    city: 'Seattle',
    state: 'WA',
    age: 58,
    gender: 'Male',
    orientation: 'Female',
    pfp_link:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6veKw1Ci42P_y4lpv8zsVxxvZfxy4S10fw&usqp=CAU',
    bio: "You know who I am. I'm a space cowboy. ",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'gotcha@aol.net',
    firstName: 'Elizabeth',
    lastName: 'Holmes',
    passwordDigest: 'test',
    city: 'Woodside',
    state: 'CA',
    age: 38,
    gender: 'Female',
    orientation: 'Male',
    pfp_link:
      'https://upload.wikimedia.org/wikipedia/commons/d/da/Elizabeth_Holmes_2014_cropped.jpg',
    bio: "Don't believe everything you hear on TV",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'newgateswhodis@hotmail.com',
    firstName: 'Melinda',
    lastName: 'Gates',
    passwordDigest: 'test',
    city: 'Seattle',
    state: 'WA',
    age: 58,
    gender: 'Female',
    orientation: 'Male',
    pfp_link:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ247YdDs4WcSjzePfL50TvhS6ViQOGIejM6w&usqp=CAU',
    bio: 'Recently single and ready to mingle!',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'namesoniceyousayittwice@stanford.com',
    firstName: 'Dr. Fei-Fei',
    lastName: 'Li',
    passwordDigest: 'test',
    city: 'Palo Alto',
    state: 'CA',
    age: 46,
    gender: 'Female',
    orientation: 'Male',
    pfp_link:
      'https://www.intalio.com/wp-content/uploads/2021/03/Square-Format_dr-fei-fei-li-300x300.png',
    bio: 'Professor of Computer Science at Stanford University, Co-Director of the Stanford Institute for Human-Centered Artificial Intelligence, and a Co-Director of the Stanford Vision and Learning Lab.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'scatz@oracle.com',
    firstName: 'Safra',
    lastName: 'Catz',
    passwordDigest: 'test',
    city: 'Chestnut Hill',
    state: 'MA',
    age: 60,
    gender: 'Female',
    orientation: 'Male',
    pfp_link:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3G6_NTsqhcbXYDrGS1tJEexlTy-AgP0mlQ&usqp=CAU',
    bio: "I'm the best there is, I wake up and I push the boundary.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'gwynne@spacex.com',
    firstName: 'Gwynne',
    lastName: 'Shotwell',
    passwordDigest: 'test',
    city: 'Hawthorne',
    state: 'CA',
    age: 58,
    gender: 'Female',
    orientation: 'Male',
    pfp_link:
      'https://e3.365dm.com/22/05/768x432/skynews-elon-musk_5780923.jpg?20220725073759',
    bio: "I'll love you to Mars and back.",
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
