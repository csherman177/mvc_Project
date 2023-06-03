const { Post } = require("../models");
const sequelize = require("../config/connection");

const PostData = [
  {
    title: "Post 1",
    content: "This is sample content 1.",
    user_id: "1",
  },
  {
    title: "Post 2",
    content: "This is sample content 2.",
    user_id: "2",
  },
  {
    title: "Post 3",
    content: "This is sample content 3.",
    user_id: "3",
  },
];

const seedPosts = (Post.bulkCreate = () => Post.bulkCreate(PostData));

module.exports = seedPosts;
