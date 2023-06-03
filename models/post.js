const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = "../config/connection";

class Post extends Model {}

Post.init(
  {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,    
  },  
  content: {
    type: DataTypes.TEXT,
    allowNull: false,   
  },
  user_id: {
  references: {
    model: 'user',
    key: 'id',
  }
},
});

module.exports = Post;
