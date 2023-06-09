const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

// fetches posts to user that is currently logged in
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_Id,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render("dashboard", {
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//
router.get("/new", withAuth, (req, res) => {
  res.render("new-post", {
    newPost,
  });
});

//Retrieves one post by ID
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render("edit-post", {
        layout: "main",
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
