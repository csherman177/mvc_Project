const router = require("express").Router();
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  res.render("all");
});

module.exports = router;
