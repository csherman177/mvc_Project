const { User, Post, Comment } = require("../models");
const sequelize = require("../config/connection.js");

const newUserData = [
  {
    name: "Courtney",
    email: "courtney@email.com",
    password: "password123",
  },
];
const PostData = [
  {
    title: "Post 1",
    content: "This is sample content 1.",
    user_id: "1",
  },
  {
    title: "Post 2",
    content: "This is sample content 2.",
    user_id: "1",
  },
  {
    title: "Post 3",
    content: "This is sample content 3.",
    user_id: "1",
  },
];
const commentData = [
  {
    body: "This is sample content 1",
    user_id: "1",
    post_id: "1",
  },
  {
    body: "This is sample content 2",
    user_id: "1",
    post_id: "2",
  },
  {
    body: "This is sample content 3",
    user_id: "1",
    post_id: "3",
  },
];
const seedUsers = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.bulkCreate(newUserData, {
      individualHooks: true,
    });
    await Post.bulkCreate(PostData, {
      individualHooks: true,
    });
    await Comment.bulkCreate(commentData, {
      individualHooks: true,
    });
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};



seedUsers();

