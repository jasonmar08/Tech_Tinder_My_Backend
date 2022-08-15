'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Image_Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Image_Post.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Image_Post.init(
    {
      type: DataTypes.STRING,
      caption: DataTypes.STRING,
      img_url: DataTypes.STRING(15000),
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
      modelName: 'Image_Post',
      tableName: 'image_posts'
    }
  )
  return Image_Post
}
