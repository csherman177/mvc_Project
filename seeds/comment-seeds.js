const { Comment } = require("../models");
const sequelize = require("../config/connection");

const commentData = [
  {
    body: "This is sample content 1",
    user_id: "1",
    post_id: "1",
  },
  {
    body: "This is sample content 2",
    user_id: "2",
    post_id: "2",
  },
  {
    body: "This is sample content 3",
    user_id: "3",
    post_id: "3",
  },
];

const seedComments = async () => {
  try {
    await sequelize.sync({ force: true });
    await Comment.bulkCreate(commentData, {
      individualHooks: true,
    });
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedComments();
module.exports = seedComments;
