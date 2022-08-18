// {
//   "development": {
//     "database": "nerds",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "nerds",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "nerds",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   }
// }

require('dotenv').config()
module.exports = {
  development: {
    database: 'nerds',
    dialect: 'postgres'
  },
  test: {
    database: 'nerds',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
