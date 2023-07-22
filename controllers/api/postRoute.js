const router = require("express").Router();
const { Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

//create a new post and assciates it to a new user
//console.log(req.session.userId);
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    Post.create({ ...body, user_id: req.session.user_Id }).then((newPost) => {
      res.json(newPost);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete a post
router.delete("/:id", withAuth, async (req, res) => {
  console.log("DELETE POST ROUTE");
  try {
    console.log(req.body, req.params.id);
    const rows = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (rows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
