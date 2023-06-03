const { User } = require("../models");
const sequelize = require("../config/connection");

const newUserData = [
  {
    name: "Courtney",
    email: "courtney@email.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(newUserData);

module.exports = seedUsers;
