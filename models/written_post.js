'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Written_Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Written_Post.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Written_Post.init(
    {
      title: DataTypes.STRING,
      text: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Written_Post',
      tableName: 'written_posts'
    }
  )
  return Written_Post
}
