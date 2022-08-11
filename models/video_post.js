'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Video_Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Video_Post.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Video_Post.init(
    {
      type: DataTypes.STRING,
      caption: DataTypes.STRING,
      video_url: DataTypes.STRING,
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
      modelName: 'Video_Post',
      tableName: 'video_posts'
    }
  )
  return Video_Post
}
