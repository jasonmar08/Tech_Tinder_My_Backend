'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User_view extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_view.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      viewed_userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'User_view',
      tableName: 'user_views'
    }
  )
  return User_view
}
