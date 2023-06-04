const { User } = require("../models");
const sequelize = require("../config/connection");

const newUserData = [
  {
    name: "Courtney",
    email: "courtney@email.com",
    password: "password123",
  },
];

const seedUsers = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.bulkCreate(newUserData, {
      individualHooks: true,
    });
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedUsers();
module.exports = seedUsers;
