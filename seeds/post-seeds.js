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

const seedPosts = async () => {
  try {
    await sequelize.sync({ force: true });
    await Post.bulkCreate(PostData, {
      individualHooks: true,
    });
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedPosts();
module.exports = seedPosts;
