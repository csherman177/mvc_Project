const Comment = require("./comment");
const Post = require("./post");
const User = require("./User");

// user can have many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

//User has many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//comment belongs to a post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

// Comment - Belong to a user.
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Post - Belong to a user
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Post - Have many comments
Post.hasMany(User, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = { User, Post, Comment };
