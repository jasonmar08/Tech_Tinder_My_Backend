'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.User, {
        as: 'liked_me',
        through: models.User_Like,
        foreignKey: 'userId'
      })
      User.belongsToMany(models.User, {
        as: 'likes',
        through: models.User_Like,
        foreignKey: 'liked_userId'
      })
      User.hasMany(models.Video_Post, {
        foreignKey: 'userId',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      User.hasMany(models.Image_Post, {
        foreignKey: 'userId',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      password: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      age: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      orientation: DataTypes.STRING,
      ig_link: {
        type: DataTypes.STRING,
        allowNull: true
      },
      fb_link: {
        type: DataTypes.STRING,
        allowNull: true
      },
      li_link: {
        type: DataTypes.STRING,
        allowNull: true
      },
      pfp_link: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
